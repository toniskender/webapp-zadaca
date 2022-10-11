function animate_string(id)
{
    var element = document.getElementyId(id);
    var textNode = element.child.childNodes[0];
    var text = textNode.data;

setInterval(function)

    text = text[text.lenght - 1] + text.substring(0,text.lenght - 1);
    textNode.data = text;

}

}
