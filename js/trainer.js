$('document').ready(function(){
    readTrainer();
});

function readTrainer(){
    $.getJSON("trainer.json", function (data){
        // console.log(data);
        var out = '';
        for (var key in data){
            out+='<div class="card"><div class="card-body">';
            out+='<h3 class="card-title">'+data[key]['name']+'</h3>';
            out+='<p class="card-text">'+data[key]['text']+'</p>';
            out+='<a href="#" class="btn btn-secondary">Записатись на пробне заняття</a></div>';
            out+='<img src="'+data[key]['avatar']+'"class="card-img" alt="header"></div>';
        }
        $('#card-container').html(out);
    })
}



                    
                        
                        