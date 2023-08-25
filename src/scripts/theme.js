/* Desenvolva sua lógica aqui ... */
export const handleDarkMode = () => {

    const html = document.querySelector('html');
    const darkModeButton = document.querySelector('header button');
    // console.log(darkModeButton);

    darkModeButton.addEventListener('click', () => {
        html.classList.toggle('dark-mode');

        if (html.classList.contains('dark-mode')) {
            localStorage.setItem('@openMusic:darkMode', true);
        } else {
            localStorage.setItem('@openMusic:darkMode', false);
        }

        const getKey = localStorage.getItem('@openMusic:darkMode');
        const darkModeEnable = JSON.parse(getKey);

        if (darkModeEnable) {
            darkModeButton.innerHTML = '<img src="https://media.graphassets.com/BgTFGDVvRdymZmzAgg9t"/>';
        } else {
            darkModeButton.innerHTML = '<img src="https://media.graphassets.com/AWCWFFLPSEWh4lhYs68c"/>';
        }
        console.log(darkModeEnable);

    });

    const getKey = localStorage.getItem('@openMusic:darkMode');
    const darkModeEnable = JSON.parse(getKey);

    if (darkModeEnable) {
        html.classList.add('dark-mode');
        darkModeButton.innerHTML = '<img src="https://media.graphassets.com/BgTFGDVvRdymZmzAgg9t"/>';
    } else {
        html.classList.remove('dark-mode');
        darkModeButton.innerHTML = '<img src="https://media.graphassets.com/AWCWFFLPSEWh4lhYs68c"/>';
    }
}