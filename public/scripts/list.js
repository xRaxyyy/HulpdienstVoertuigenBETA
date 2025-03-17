const NLDropdown = {
    HulpdienstDropdown: [
        { value: "all", text: "Alle Hulpdiensten" },
        { value: "Politie", text: "Politie" },
        { value: "Brandweer", text: "Brandweer" },
        { value: "Ambulance", text: "Ambulance" },
        { value: "Reddingsbrigade", text: "Reddingsbrigade" },
        { value: "KNRM", text: "KNRM" },
        { value: "ProRail", text: "ProRail" },
        { value: "Rijkswaterstaat", text: "Rijkswaterstaat" },
        { value: "Ziekenhuizen", text: "Ziekenhuizen" },
        { value: "Academies", text: "Academies" },
        { value: "Meldkamers", text: "Meldkamers" },
        { value: "Weginspecteurs", text: "Weginspecteurs" },
        { value: "Kustwacht", text: "Kustwacht" },
        { value: "Defensie", text: "Defensie" },
        { value: "Bergingsbedrijf", text: "Bergingsbedrijf" },
        { value: "KMAR/Douane", text: "KMAR/Douane" },
        { value: "Rijksrederij", text: "Rijksrederij" },
    ],

    RegioDropdown: [
        { value: "all", text: "Alle Regio's" },
        { value: "1", text: "1 - Groningen (HVDG)" },
        { value: "2", text: "2 - Fryslan (VRF)" },
        { value: "3", text: "3 - Drenthe (VRD)" },
        { value: "4", text: "4 - IJsselland (VRIJ)" },
        { value: "5", text: "5 - Twente (VRT)" },
        { value: "6", text: "6 - Noord en Oost-Gelderland (VNOG)" },
        { value: "7", text: "7 - Gelderland Midden (VGGM)" },
        { value: "8", text: "8 - Gelderland Zuid (VRGZ)" },
        { value: "9", text: "9 - Utrecht (VRU)" },
        { value: "10", text: "10 - Noord-Holland Noord (VRNHN)" },
        { value: "11", text: "11 - Zaanstreek-Waterland (VRZW)" },
        { value: "12", text: "12 - Kennemerland (VRK)" },
        { value: "13", text: "13 - Amsterdam-Amstelland (VRAA)" },
        { value: "14", text: "14 - Gooi en Vechtstreek (VRGV)" },
        { value: "15", text: "15 - Haaglanden (VRH)" },
        { value: "16", text: "16 - Hollands Midden (VRHM)" },
        { value: "17", text: "17 - Rotterdam-Rijnmond (VRR)" },
        { value: "18", text: "18 - Zuid-Holland Zuid (VRZHZ)" },
        { value: "19", text: "19 - Zeeland (VRZ)" },
        { value: "20", text: "20 - Midden en West-Brabant (VRMWB)" },
        { value: "21", text: "21 - Brabant-Noord (VRBN)" },
        { value: "22", text: "22 - Brabant Zuid Oost (VRBZO)" },
        { value: "23", text: "23 - Limburg-Noord (VRLN)" },
        { value: "24", text: "24 - Zuid-Limburg (VRZL)" },
        { value: "25", text: "25 - Flevoland (VRFL)" },
        { value: "26", text: "26 - NIPV (IFV)" },
        { value: "28", text: "28 - Defentie (DF)" },
        { value: "NN", text: "NN - Noord-Nederland (RWS)" },
        { value: "ON", text: "ON - Oost-Nederland (RWS)" },
        { value: "MN", text: "MN - Midden-Nederland (RWS)" },
        { value: "WNN", text: "WNN - West-Nederland-Noord (RWS)" },
        { value: "WNZ", text: "WNZ - West-Nederland-Zuid (RWS)" },
        { value: "ZD", text: "ZD - Zee en Delta (RWS)" },
        { value: "ZN", text: "ZN - Zuid-Nederland (RWS)" },
        { value: "NN", text: "NN - Noord-Nederland (Politie)" },
        { value: "ON", text: "ON - Oost-Nederland (Politie)" },
        { value: "MD", text: "MD - Midden-Nederland (Politie)" },
        { value: "NH", text: "NH - Noord-Holland (Politie)" },
        { value: "AD", text: "AD - Amsterdam (Politie)" },
        { value: "DH", text: "DH - Den Haag (Politie)" },
        { value: "RT", text: "RT - Rotterdam (Politie)" },
        { value: "ZB", text: "ZB - Zuid-Brabant (Politie)" },
        { value: "OB", text: "OB - Oost-Brabant (Politie)" },
        { value: "LB", text: "LB - Limburg (Politie)" },
    ],
};

const BEDropdown = {
    HulpdienstDropdown: [
        { value: "all", text: "Alle Hulpdiensten" },
        { value: "Politie", text: "Politie" },
        { value: "Brandweer", text: "Brandweer" },
        { value: "Ambulance", text: "Ambulance" },
        { value: "Reddingsbrigade", text: "Reddingsbrigade" },
        { value: "Kustwacht", text: "Kustwacht" },
        { value: "Ziekenhuizen", text: "Ziekenhuizen" },
        { value: "Academies", text: "Academies" },
        { value: "Meldkamers", text: "Meldkamers" },
    ],

    RegioDropdown: [
        { value: "all", text: "Alle Regio's" },
        { value: "Antwerpen", text: "Antwerpen" },
        { value: "Brussel", text: "Brussel" },
        { value: "Limburg", text: "Limburg" },
        { value: "Oost-Vlaanderen", text: "Oost-Vlaanderen" },
        { value: "Vlaams-Brabant", text: "Vlaams-Brabant" },
        { value: "West-Vlaanderen", text: "West-Vlaanderen" },
        { value: "Henegouwen", text: "Henegouwen" },
        { value: "Luik", text: "Luik" },
        { value: "Luxemburg", text: "Luxemburg" },
        { value: "Waals-Brabant", text: "Waals-Brabant" },
        { value: "Namen", text: "Namen" },
    ],
};

const table = document.getElementById('list_table');
const input = document.getElementById('search-input');
const hulpdienstDropdown = document.getElementById('hulpdienst-dropdown');
const regioDropdown = document.getElementById('regio-dropdown');
const scrollableContent = document.querySelector('.scroll-content');

let count = 100;
let preprocessedDataset = [];
let filteredData = [];
let offset = 0;
let isScrollting = false;
let scrollTimeout;
let allRowsRendered = false;

function convertSheetDataToJSON(sheetData) {
    const headers = sheetData[2];
    const rows = sheetData.slice(3);

    return rows.map((row) => {
        const obj = {};
        headers.forEach((header, index) => {
            obj[header] = row[index] ? row[index].trim() : '';
        });
        return obj;
    });
}

function preprocessDataset(dataset) {
    return dataset.map((row) => {
        const searchField = [
            row.Adres,
            row.Roepnummer,
            row.Afkorting,
            row.TypeVoertuig,
            row.Kenteken,
            row.Bijzonderheden,
            row.Hulpdienst,
            row.Regio,
        ]
            .map((field) => (field ? field.toLowerCase() : ''))
            .join(' ');

        return {
            ...row,
            _searchField: searchField,
        };
    });
}

function populateDropdown(dropdownButton, dropdownData) {
    const dropdownMenu = dropdownButton.nextElementSibling.querySelector('.dropdown-menu');;
    dropdownMenu.innerHTML = '';

    dropdownData.forEach((item) => {
        const li = document.createElement('li');
        li.setAttribute('value', item.value);
        li.textContent = item.text;
        dropdownMenu.appendChild(li);
    });
}

function filterRegioDropdown(hulpdienstValue) {
    const regioDropdownButton = document.getElementById('regio-dropdown');
    const regioDropdownMenu = regioDropdownButton.nextElementSibling.querySelector('.dropdown-menu');
    regioDropdownMenu.innerHTML = ''; // Clear existing options

    // Determine which dropdown data to use based on the URL
    const dropdownData = window.location.search.includes('NL') ? NLDropdown : BEDropdown;

    let filteredRegions = [];

    if (hulpdienstValue === 'all') {
        filteredRegions = dropdownData.RegioDropdown;
    } else if (hulpdienstValue === 'Politie') {
        filteredRegions = dropdownData.RegioDropdown.filter(
            region => region.value === 'all' || region.text.includes('(Politie)')
        );
    } else if (hulpdienstValue === 'Rijkswaterstaat' || hulpdienstValue === 'Weginspecteurs') {
        filteredRegions = dropdownData.RegioDropdown.filter(
            region => region.value === 'all' || region.text.includes('(RWS)')
        );
    } else {
        filteredRegions = dropdownData.RegioDropdown.filter(
            region => !region.text.includes('(Politie)') && !region.text.includes('(RWS)')
        );
    }

    // Populate the dropdown with the filtered regions
    populateDropdown(regioDropdownButton, filteredRegions);

    // Initialize the custom dropdown functionality
    initializeCustomDropdown(regioDropdownButton, debouncedUpdateList);
}


function updateHulpdienstDropdown(regioValue) {
    const hulpdienstDropdownButton = document.getElementById('hulpdienst-dropdown');

    if (regioValue && regioValue.includes('(Politie)')) {
        hulpdienstDropdownButton.innerHTML = `Politie <i class="fa fa-chevron-down"></i>`;
        hulpdienstDropdownButton.setAttribute('data-value', 'Politie');
        filterRegioDropdown('Politie'); // Filter regions to show only Politie options
    } else if (regioValue && regioValue.includes('(RWS)')) {
        hulpdienstDropdownButton.innerHTML = `Rijkswaterstaat <i class="fa fa-chevron-down"></i>`;
        hulpdienstDropdownButton.setAttribute('data-value', 'Rijkswaterstaat');
        filterRegioDropdown('Rijkswaterstaat'); // Filter regions to show only RWS options
    }
    // Do nothing if the region does not include "(Politie)" or "(RWS)"
}

function initializeCustomDropdown(dropdownButton, callback) {
    const dropdownMenu = dropdownButton.nextElementSibling.querySelector('.dropdown-menu');
    const dropdownItems = dropdownMenu.querySelectorAll('li');

    dropdownButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('visible');
    });

    dropdownItems.forEach((item) => {
        item.addEventListener('click', () => {
            const searchInput = document.getElementById('search-input');

            if (searchInput) {
                searchInput.value = ''; // Clear search input if present
            }

            dropdownButton.innerHTML = `${item.textContent} <i class="fa fa-chevron-down"></i>`;
            dropdownButton.setAttribute('data-value', item.getAttribute('value'));

            dropdownMenu.classList.remove('visible');

            if (dropdownButton.id === 'regio-dropdown') {
                const regioValue = item.textContent;
                if (regioValue.includes('(Politie)') || regioValue.includes('(RWS)')) {
                    updateHulpdienstDropdown(regioValue); // Update hulpdienst based on selected region
                }
            }

            if (dropdownButton.id === 'hulpdienst-dropdown') {
                const hulpdienstValue = item.getAttribute('value');
                // Reset regio dropdown to "All" when hulpdienst changes
                const regioDropdownButton = document.getElementById('regio-dropdown');
                regioDropdownButton.innerHTML = `Alle Regio's <i class="fa fa-chevron-down"></i>`;
                regioDropdownButton.setAttribute('data-value', 'all');
                filterRegioDropdown(hulpdienstValue); // Filter regions based on selected hulpdienst
            }

            callback();
        });
    });

    document.addEventListener('click', (e) => {
        if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('visible');
        }
    });
}


function filterAndSearchDataset(query, region, service, dataset) {
    const lowerQuery = query.toLowerCase();
    const filtered = [];

    dataset.forEach((item, index, array) => {
        const matchesRegion = region === 'all' || item.Regio === region;
        const matchesService = service === 'all' || item.Hulpdienst === service;

        const matchesSearch =
            lowerQuery === '' ||
            item._searchField.includes(lowerQuery) ||
            item.TypeVoertuig.toLowerCase().includes(lowerQuery) ||
            (item.Roepnummer && item.Roepnummer.toLowerCase().includes(lowerQuery)); 

        if (item.TypeVoertuig === '' && item.Adres) {
            let childIndex = index + 1;
            let hasMatchingChild = false;

            while (
                childIndex < array.length &&
                array[childIndex].TypeVoertuig !== ''
            ) {
                const childRow = array[childIndex];
                const childMatchesSearch =
                    childRow._searchField.includes(lowerQuery) ||
                    childRow.TypeVoertuig.toLowerCase().includes(lowerQuery) ||
                    (childRow.Roepnummer && childRow.Roepnummer.toLowerCase().includes(lowerQuery)); // Added Roepnummer check for child rows

                if (childMatchesSearch) {
                    hasMatchingChild = true;
                    break; 
                }
                childIndex++;
            }

            if (
                matchesRegion &&
                matchesService &&
                (hasMatchingChild || 
                 (lowerQuery === '' || item.Adres.toLowerCase().includes(lowerQuery)))
            ) {
                filtered.push(item);
            }
        } else if (matchesRegion && matchesService && matchesSearch) {
            filtered.push(item);
        }
    });

    return filtered;
}

function updateList(shouldClear = true) {
    const query = input.value || '';
    const region = regioDropdown.getAttribute('data-value') || 'all';
    const service = hulpdienstDropdown.getAttribute('data-value') || 'all';

    filteredData = filterAndSearchDataset(query, region, service, preprocessedDataset);

    if (shouldClear) {
        offset = 0;
        allRowsRendered = false;
    }

    const containersHolder = document.getElementById('containers-holder');

    if (shouldClear) {
        containersHolder.innerHTML = '';
    }

    if (filteredData.length === 0) {
        // Check if the service is selected and no matches are found
        if (service !== 'all' && query === '' && region === 'all') {
            const noMatchDiv = document.createElement('div');
            noMatchDiv.className = 'container';
            const header = document.createElement('div');
            header.className = 'header';
            header.textContent = 'Word nog aan de lijst gewerkt, dit kan even duren!';
            noMatchDiv.appendChild(header);
            containersHolder.appendChild(noMatchDiv);
        } else {
            // No matches found due to region or search query
            const noMatchDiv = document.createElement('div');
            noMatchDiv.textContent = 'Geen overeenkomsten gevonden.';
            noMatchDiv.style.textAlign = 'center';
            noMatchDiv.style.padding = '20px';
            noMatchDiv.style.color = '#888';
            containersHolder.appendChild(noMatchDiv);
        }
    } else {
        generateVisibleRows(filteredData, count, shouldClear);
    }
}

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

const debouncedUpdateList = debounce(() => {
    updateList();
}, 50);

function generateVisibleRows(dataset, amount, shouldClear = false) {
    const containersHolder = document.getElementById('containers-holder');

    if (shouldClear) {
        containersHolder.innerHTML = '';
        offset = 0;
    }

    if (dataset.length === 0) {
        const noMatchDiv = document.createElement('div');
        noMatchDiv.textContent = 'Geen overeenkomsten gevonden.';
        noMatchDiv.style.textAlign = 'center';
        noMatchDiv.style.padding = '20px';
        noMatchDiv.style.color = '#888';
        containersHolder.appendChild(noMatchDiv);
        return;
    }

    let currentAddress = '';
    let currentContainer = null;
    let renderedCount = 0;

    for (let i = offset; i < dataset.length; i++) {
        const row = dataset[i];

        if (row.TypeVoertuig === '' && row.Adres) {
            if (renderedCount >= amount && currentContainer !== null) {
                break;
            }

            currentAddress = row.Adres;
            currentContainer = document.createElement('div');
            currentContainer.className = 'container';

            const header = document.createElement('div');
            header.className = 'header';
            header.textContent = currentAddress;
            currentContainer.appendChild(header);

            containersHolder.appendChild(currentContainer);

            let j = i + 1;
            while (j < dataset.length && dataset[j].TypeVoertuig !== '') {
                const childRow = dataset[j];
                const infoGroup = createInfoGroup(childRow);
                currentContainer.appendChild(infoGroup);
                renderedCount++;
                j++;
            }

            offset = j;
            i = j - 1;
        } else if (currentContainer && row.TypeVoertuig !== '') {
            const infoGroup = createInfoGroup(row);
            currentContainer.appendChild(infoGroup);
            renderedCount++;
        }

        if (renderedCount >= amount) {
            break;
        }
    }

    if (offset >= dataset.length) {
        allRowsRendered = true;
    }

    debouncedUpdateInfoGroupHeight();
}

function createInfoGroup(row) {
    const infoGroup = document.createElement('div');
    infoGroup.className = 'info-group';

    const infoContainer1 = document.createElement('div');
    infoContainer1.className = 'info-container';

    const roepnummerBox = document.createElement('div');
    roepnummerBox.className = 'info-box';
    const roepnummerLabel = document.createElement('div');
    roepnummerLabel.className = 'label';
    roepnummerLabel.textContent = 'Roepnummer';
    const roepnummerValue = document.createElement('div');
    roepnummerValue.className = 'value';
    roepnummerValue.textContent = row.Roepnummer || '';
    roepnummerBox.appendChild(roepnummerLabel);
    roepnummerBox.appendChild(roepnummerValue);
    infoContainer1.appendChild(roepnummerBox);

    const typeVoertuigBox = document.createElement('div');
    typeVoertuigBox.className = 'info-box';
    const toggleBtn = document.createElement('div');
    toggleBtn.className = 'toggle-btn';
    toggleBtn.innerHTML = '<i class="fa fa-chevron-down"></i>';
    toggleBtn.onclick = function () {
        toggleDetails(this);
    };
    const typeVoertuigLabel = document.createElement('div');
    typeVoertuigLabel.className = 'label';
    typeVoertuigLabel.textContent = 'Type Voertuig';
    const typeVoertuigValue = document.createElement('div');
    typeVoertuigValue.className = 'value';
    typeVoertuigValue.textContent = row.TypeVoertuig || '';
    typeVoertuigBox.appendChild(toggleBtn);
    typeVoertuigBox.appendChild(typeVoertuigLabel);
    typeVoertuigBox.appendChild(typeVoertuigValue);
    infoContainer1.appendChild(typeVoertuigBox);

    infoGroup.appendChild(infoContainer1);

    const infoContainer2 = document.createElement('div');
    infoContainer2.className = 'info-container toggle-section hidden';

    const afkortingBox = document.createElement('div');
    afkortingBox.className = 'info-box';
    const afkortingLabel = document.createElement('div');
    afkortingLabel.className = 'label';
    afkortingLabel.textContent = 'Afkorting';
    const afkortingValue = document.createElement('div');
    afkortingValue.className = 'value';
    afkortingValue.textContent = row.Afkorting || '';
    afkortingBox.appendChild(afkortingLabel);
    afkortingBox.appendChild(afkortingValue);
    infoContainer2.appendChild(afkortingBox);

    const kentekenBox = document.createElement('div');
    kentekenBox.className = 'info-box';
    const kentekenLabel = document.createElement('div');
    kentekenLabel.className = 'label';
    kentekenLabel.textContent = 'Kenteken';
    const kentekenValue = document.createElement('div');
    kentekenValue.className = 'value';
    kentekenValue.textContent = row.Kenteken || '';
    kentekenBox.appendChild(kentekenLabel);
    kentekenBox.appendChild(kentekenValue);
    infoContainer2.appendChild(kentekenBox);

    if (row.Bijzonderheden && row.Bijzonderheden.trim() !== '') {
        const bijzonderhedenBox = document.createElement('div');
        bijzonderhedenBox.className = 'info-box large';
        const bijzonderhedenLabel = document.createElement('div');
        bijzonderhedenLabel.className = 'label';
        bijzonderhedenLabel.textContent = 'Bijzonderheden';
        const bijzonderhedenValue = document.createElement('div');
        bijzonderhedenValue.className = 'value';
        bijzonderhedenValue.textContent = row.Bijzonderheden || '';
        bijzonderhedenBox.appendChild(bijzonderhedenLabel);
        bijzonderhedenBox.appendChild(bijzonderhedenValue);
        infoContainer2.appendChild(bijzonderhedenBox);
    }

    infoGroup.appendChild(infoContainer2);

    return infoGroup;
}

scrollableContent.addEventListener('scroll', () => {
    if (isScrollting || allRowsRendered) return;
    isScrollting = true;
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        if (
            scrollableContent.scrollTop + scrollableContent.clientHeight >= scrollableContent.scrollHeight - 5 &&
            !allRowsRendered &&
            filteredData.length > offset
        ) {
            generateVisibleRows(filteredData, count, false);
        }
        isScrollting = false;
    }, 200);
});

document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = window.location.search.substring(1);
    const region = urlParams;

    const sheetData = await fetchDataFromGoogleSheets(region);
    const jsonData = convertSheetDataToJSON(sheetData);
    preprocessedDataset = preprocessDataset(jsonData);

    let dropdownData;
    if (region === 'NL') {
        dropdownData = NLDropdown;
        document.querySelector('a[href="../list.html?NL"]').style.color = 'var(--accent-color)';
    } else if (region === 'BE') {
        dropdownData = BEDropdown;
        document.querySelector('a[href="../list.html?BE"]').style.color = 'var(--accent-color)';
    }

    populateDropdown(hulpdienstDropdown, dropdownData.HulpdienstDropdown);
    populateDropdown(regioDropdown, dropdownData.RegioDropdown);

    initializeCustomDropdown(hulpdienstDropdown, debouncedUpdateList);
    initializeCustomDropdown(regioDropdown, debouncedUpdateList);

    const selectedDropdownValue = localStorage.getItem('selectedDropdownValue');
    if (selectedDropdownValue) {
        const dropdownButton = document.getElementById('hulpdienst-dropdown');
        const dropdownMenu = dropdownButton.nextElementSibling.querySelector('.dropdown-menu');
        const dropdownItems = dropdownMenu.querySelectorAll('li');

        dropdownItems.forEach((item) => {
            if (item.getAttribute('value') === selectedDropdownValue) {
                dropdownButton.innerHTML = `${item.textContent} <i class="fa fa-chevron-down"></i>`;
                dropdownButton.setAttribute('data-value', item.getAttribute('value'));
                filterRegioDropdown(item.getAttribute('value'));
            }
        });

        localStorage.removeItem('selectedDropdownValue');
    }

    debouncedUpdateList(true);

    input.addEventListener('input', debouncedUpdateList);

    setTimeout(() => {
        const loader = document.querySelector('#showbox-holder');

        if (loader) {
            loader.classList.add('fade-out');

            document.documentElement.style.overflow = '';

            if (typeof window.updateScrollbar === 'function') {
                window.updateScrollbar();
            }

            setTimeout(() => {
                if (loader) {
                    loader.style.display = 'none';
                }
            }, 600);
        }
    }, 250);
});

async function fetchDataFromGoogleSheets(region) {
    const response = await fetch(`/fetch-sheet?region=${region}`);
    const data = await response.json();
    return data.values;
}

function debouncedUpdateInfoGroupHeight() {
    const infoGroups = document.querySelectorAll('.info-group');
    infoGroups.forEach((infoGroup) => {
        const infoBox = infoGroup.querySelector('.info-box');
        if (infoBox) {
            let infoBoxHeight = infoBox.offsetHeight;

            if (window.innerWidth < 350) {
                infoBox.style.minHeight = `${MIN_INFO_BOX_HEIGHT}px`;
                infoBoxHeight = Math.max(infoBoxHeight, MIN_INFO_BOX_HEIGHT);
            } else {
                infoBox.style.minHeight = '';
            }

            const newHeight = infoBoxHeight + 4;
            infoGroup.style.height = `${newHeight}px`;
        }
    });
}