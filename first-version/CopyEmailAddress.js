const copyText = "ortiz.ivan93@gmail.com";
const copyEmailAddressButton = document.getElementById("contact--copy-email-address-tooltip");

const copyEmailAddress = async() => {
    try {
        await navigator.clipboard.writeText(copyText);
        copyEmailAddressButton.setAttribute("tooltip", "Copied!");
        copyEmailAddressButton.setAttribute("tooltip-position", "right");
        setTimeout(() => copyEmailAddressButton.removeAttribute("tooltip", "tooltip-position"), "3000");
        console.log("Copied to clipboard");
    
    } catch (err) {
        console.log("Failed to copy to clipboard", err);
    }
}