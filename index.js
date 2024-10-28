const $ = document.querySelector.bind(document);

const _dropDownDismissOnTap = (event) => {
    const isDropDownChild = $('#more-options').contains(event.target)
    if (isDropDownChild) {
        return
    }
    event.preventDefault();
    event.stopPropagation();
    dismissDropDown()

}

const _dropDownDismissOnEsc = (event) => {
    if (event.keyCode !== 27) {
        return
    }
    event.preventDefault();
    event.stopPropagation();
    dismissDropDown()
}

const dismissDropDown = () => {
    $('#more-options').classList.remove("open")
    document.removeEventListener('click', _dropDownDismissOnTap)
    document.removeEventListener('keydown', _dropDownDismissOnEsc)
}

const showDropDown = () => {
    $('#more-options').classList.add("open")
    setTimeout(() => {
        document.addEventListener('click', _dropDownDismissOnTap)
        document.addEventListener('keydown', _dropDownDismissOnEsc)
    }, 0)
}

const sadEmojis = ['😭', '😢', '😪', '😓', '😞']

const frncs = {
    toggleMoreDropdown: () => {
        const isOpen = $('#more-options').classList.contains('open')
        if (isOpen) {
            dismissDropDown()
        } else {
            $('#more-options').classList.add("open")
            showDropDown()
        }
    },
    getSadEmoji: () => {
        return sadEmojis.at(Math.floor(Math.random() * sadEmojis.length))
    }
}

document.addEventListener('DOMContentLoaded', () => {
    $("#more").addEventListener('click', () => {
        $('#sad-emoji').innerHTML = frncs.getSadEmoji()
        frncs.toggleMoreDropdown()
    })
})


