for(let i=1; i<=24; i++){
    $(`#item${i}`).css({"background":`url(img/image_part_0${i}.png)`, 'background-size':'100% 100%'})
}

for(let i=1; i<=24; i++){
    $(`#item${i}`).draggable({
        scope: `cell${i}`,
        containment: field,
        snap: '.drop_item',
        snapMode:"inner",
        snapTolerance: 15,
    })

    $(`#drop${i}`).droppable({
        scope: `cell${i}`,    
        drop:function(event, ui){
            let id=ui.draggable.attr('id')
            $(`#${id}`).draggable('disable')
        },
        tolerance:'fit'
    })
}

