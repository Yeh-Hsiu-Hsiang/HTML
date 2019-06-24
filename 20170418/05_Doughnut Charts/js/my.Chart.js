$(function(){
    var ctx = $("#myChart");

    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
    labels: [
        "交通費用",
        "飲食費用",
        "通訊費用",
		"旅遊費用"
    ],
    datasets: [
        {
            data: [500, 1000, 998, 2000],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
				"#AAA1FF"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
				"#AAA1FF"
            ]
        }]
}
    });
});