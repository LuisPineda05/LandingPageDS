$.get("_footer.html", contentToInject => {
    $("#footer-placeholder").replaceWith(contentToInject);
});