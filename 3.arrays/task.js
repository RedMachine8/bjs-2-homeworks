function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    if (!users || !gender) return 0;
    const filteredUsers = users.filter(user => user.gender === gender);

    if (filteredUsers.length === 0) return 0;

    const averageAge = filteredUsers.reduce((acc, user) => acc + user.age, 0) / filteredUsers.length;

    return averageAge;
}