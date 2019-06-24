$(function(){
    var ctx = $("#myChart");

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["8-9歲", "9-10歲", "10-11歲"],
            datasets: [{
                label: '男學童平均身高, 分佈百分比(%)',			
                data: [128
, 133.6
, 138.9
],
                backgroundColor: [
                    'rgba(135, 232, 207, 0.2)',                    
                    'rgba(135, 232, 207, 0.2)',
                    'rgba(135, 232, 207, 0.2)'
                ],
                borderColor: [
                    'rgba(135, 232, 207, 1)',
                    'rgba(135, 232, 207, 1)',
                    'rgba(135, 232, 207, 1)'                
                ],
                borderWidth: 1
            },
			{
                label: '女學童平均身高, 分佈百分比(%)',			
                data: [126.9
, 133
, 139.4
],
                backgroundColor: [
                    'rgba(232, 160, 168, 0.2)',                    
                    'rgba(232, 160, 168, 0.2)',
                    'rgba(232, 160, 168, 0.2)'
                ],
                borderColor: [
                    'rgba(232, 160, 168, 1)',
                    'rgba(232, 160, 168, 1)',
                    'rgba(232, 160, 168, 1)'                
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
});