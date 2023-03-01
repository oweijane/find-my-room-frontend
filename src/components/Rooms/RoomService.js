export async function fetchAllRooms() {
    try {
        const response = await fetch('/list');
        return await response.json();
    } catch(error) {
        return [];
    }
}

export async function fetchVacantRooms() {
    try {
        const response = await fetch('/vacant');
        return await response.json();
    } catch(error) {
        return [];
    }
}
