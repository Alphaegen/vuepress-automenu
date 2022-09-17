const fs = require("fs");
const path = require("path");

function getSidebarItems(docsLocation: string = 'docs') {
    let location = docsLocation.replace('/\/$/', '');

    // Create array with all folders/files within the 'location' directory
    var structure = fs
        .readdirSync(path.join(`${process.cwd()}/${location}`))

        // Prevents dotfiles from being added to the menu
        .filter((item: string) => !item.startsWith('.'))

        // Keep or put the README.md file as the first element in the array
        .sort((a: string, b: string) => b.includes('README') ? 1 : a.includes('README') ? -1 : 0);

    // Itterate over the files/folders
    const extendedStructure = structure.map((item: string) => {

        // if item=file => add 'location/item' to menu (as a menu item)
        // if item=folder => rerun getSidebarItems function with new folder 'location' to get sub folders/files and add this to menu (as a menu group)
        if (fs.statSync(path.join(`${process.cwd()}/${location}`, item)).isFile()) {
            return '/' + (location + '/').replace('docs/', '') + item
        }

        return {
            text: item,
            link: '/' + (location + '/').replace('docs/', '') + item + '/',
            children: getSidebarItems(location + '/' + item)
        }
    }
    )

    // If folder doesn't contain any sub folders/files or file is empty
    const extendedStructureFiltered = extendedStructure.filter((item) => !(item.children && item.children.length == 0)
    )


    return [
        ...extendedStructureFiltered
    ];
}

function getNavbarItems(docsLocation: string = 'docs') {

    // Trim slash from location
    let location = docsLocation.replace('/\/$/', '');

    // Create array with all folders/files within the 'location' directory
    var structure = fs.readdirSync(path.join(`${process.cwd()}/${location}`))

        // Prevent the '.veupress' folder from being added to the menu
        .filter((item: string) => item !== '.vuepress')

        // Filter out all files except 'README.md'
        .filter((item: string) =>
            !fs.statSync(path.join(`${process.cwd()}/${location}`, item)).isFile() || item == 'README.md'
        )

        // 
        .map((item: string) => {
            if (item == 'README.md') {
                return item;
            }

            return {
                text: item,
                link: '/' + (location + '/').replace('docs/', '') + item + '/',
                children: getNavbarItems(location + '/' + item)
            }
        }
        )

        // Remove 'README.md' files from menu
        .filter((item) => item !== 'README.md')

        // Remove folders that are empty
        .filter((item) => fs.readdirSync(path.join(`${process.cwd()}/${location}/${item.text}`)).length > 0);



    return [
        ...structure
    ];
}

export { getSidebarItems, getNavbarItems };

