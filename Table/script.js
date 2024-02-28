const teamMembers = [
    {
        src: 'assets/james.png',
        name: 'James Alexander',
        alias: '@james',
        email: 'james@example.com',
        status: 'inactive',
        tags: ['dev', 'QA']
    },
    {
        src: 'assets/erik.png',
        name: 'Erik Cousillas',
        alias: '@erik',
        email: 'erik@cousillas.com',
        status: 'active',
        tags: ['dev', 'QA', 'marketing']
    },
    {
        src: 'assets/erik.png',
        name: 'Erik Cousillas',
        alias: '@erik',
        email: 'erik@cousillas.com',
        status: 'offline',
        tags: ['design', 'dev', 'QA']
    },
    {
        src: 'assets/erik.png',
        name: 'Erik Cousillas',
        alias: '@erik',
        email: 'erik@cousillas.com',
        status: 'offline',
        tags: ['design', 'dev', 'QA']
    },
    {
        src: 'assets/erik.png',
        name: 'Erik Cousillas',
        alias: '@erik',
        email: 'erik@cousillas.com',
        status: 'offline',
        tags: ['design', 'dev', 'QA']
    },
    {
        src: 'assets/erik.png',
        name: 'Erik Cousillas',
        alias: '@erik',
        email: 'erik@cousillas.com',
        status: 'offline',
        tags: ['design', 'dev', 'QA']
    },
    {
        src: 'assets/erik.png',
        name: 'Erik Cousillas',
        alias: '@erik',
        email: 'erik@cousillas.com',
        status: 'offline',
        tags: ['design', 'dev', 'QA']
    },
    {
        src: 'assets/erik.png',
        name: 'Erik Cousillas',
        alias: '@erik',
        email: 'erik@cousillas.com',
        status: 'offline',
        tags: ['design', 'dev', 'QA']
    },
    // more records here
];

let tableRowCount = document.getElementsByClassName(
    'table-row-count'
);
tableRowCount[0].innerHTML = `(${teamMembers.length}) Members`;
let tableBody = document.getElementById(
    'team-member-rows'
);
const itemsOnPage = 5;
const numberOfPages = Math.ceil(
    teamMembers.length / itemsOnPage
);

const start = (new URLSearchParams(window.location.search))
    .get('page') || 1;

const mappedRecords = teamMembers
    .filter((_, i) => (
        ((start - 1) * itemsOnPage) < i + 1) &&
        (i+1 <= start * itemsOnPage)
    )
    .map(
        (teamMember) => {
            return `<tr>
            <td class="team-member-profile">
                <img src="${teamMember.src}" alt="${teamMember.name}">
                <span class="profile-info">
                    <span class="profile-info__name">
                        ${teamMember.name}
                    </span>
                    <span class="profile-info__alias">
                        ${teamMember.alias}
                    </span>
                </span>
            </td>
            <td>
                <span class="status status--${teamMember.status}">
                    ${teamMember.status}
                </span>
            </td>
            <td>${teamMember.email}</td>
            <td>
                <span class="tags">
                    ${teamMember.tags
                        .map((tag) =>
                        `<span class="tag tag--${tag}">
                        ${tag}
                        </span>`)
                    .join('')}
                </span>
            </td>
        </tr>`;
    });

tableBody.innerHTML = mappedRecords.join('');

const pagination = document.querySelector('.pagination');
const linkList = [];

for (let i = 0; i < numberOfPages; i++) {
    const pageNumber = i + 1;
    linkList.push(`<li>
        <a
            href="?page=${pageNumber}"
            ${pageNumber == start ? 'class="active"' : ''}
            title="page ${pageNumber}">
                ${pageNumber}
        </a>
    </li>`);
}

pagination.innerHTML = linkList.join('');