(() => {
    let myIcons = documents.querySelectorAll('img');
    function logMyId() {
        console.log(this.id);
    }
    myIcons.forEach(icon => icon.addEventListener('click', logMyId));
})();