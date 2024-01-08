
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/juliakarolaynne/portifolio/main/data/profile.json?token=GHSAT0AAAAAACMKFZH54IBL6DUFO73SJFYEZM3J4AA';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}