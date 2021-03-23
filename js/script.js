$(document).ready(function(){

    

    $('#submit').click(function(){
        $('#results').html('');
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/group?id=2179537,2193732,2192362,2190324,2208032&appid=5cf8b5a934f7eb13eb77b21ff957d3e6',
            type: "GET",
            dataType: 'JSON', 
            success: function(result, status, xhr){
                console.log(result);
                
            },
            error: function(xhr, status, error){
                console.log('Status: ' + status + 'Error: ' + error + 'XHR Status text: ' + xhr.statusText + 'XHR Status: ' + xhr.status );
            }
        })
    })
});
