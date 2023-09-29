// Get the list of disabled sites.
var disabledSites = chrome.storage.local.get("disabledSites");

// Check if the floating div setting is enabled for this site.
if (
  (!disabledSites) ||
  !disabledSites.includes(tabURL)
) {
  // The floating div setting is enabled for this site.

  // Create a floating div with a green background.
  var div = document.createElement("div");
  div.style.position = "fixed";
  div.style.top = "0";
  div.style.left = "0";
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.background = "green";

  // Append the div to the body of the page.
  document.body.appendChild(div);
} else {
  // The floating div setting is disabled for this site.
  // Do not show the floating div.
}

// Check if the popup should be opened.
if (chrome.storage.local.get("showPopup") === true) {
  chrome.tabs.create({ url: "popup.html" });
}
