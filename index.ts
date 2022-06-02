const fs = require("fs");
const path = require("path");

function getMenuItems(docsLocation = 'docs') {
    let location = docsLocation.replace('/\/$/', '');

    // Create array with all folders/files within the 'location' directory
    const structure = fs
    .readdirSync(path.join(`${process.cwd()}/${location}`))

    // Prevent the '.veupress' folder from being added to the menu
    .filter((item: string) => item !== '.vuepress')

    // Keep or put the README.md file as the first element in the array
    .sort((a: string, b: string) => b.includes('README') ? 1 : a.includes('README') ? -1 : 0);

    // Itterate over the files/folders
    const extendedStructure = structure.map(

        // if item=file => add 'location/item' to menu (as a menu item)
        // if item=folder => rerun getMenuItems function with new folder 'location' to get sub folders/files and add this to menu (as a menu group)
        (item: string) => fs.statSync(path.join(`${process.cwd()}/${location}`, item)).isFile()
            ?
                '/' + (location + '/').replace('docs/', '') + item
                    :
                        {
                        text: item,
                        link: '/' + (location + '/').replace('docs/', '') + item,
                        children: getMenuItems(location + '/' + item)
                    }
    )

    // If folder doesn't contain any sub folders/files
    const extendedStructureFiltered = extendedStructure.filter((item) =>
                                                               item.children && item.children.length == 0 ? false : true
                                                              )

                                                              return [
                                                                  ...extendedStructureFiltered
                                                              ];
}

export { getMenuItems };

