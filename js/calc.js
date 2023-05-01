$('.main__block_checkbox').click(function () {
    // console.log('clicked');

    let costs = $('.main__block_price');
    // console.log(costs.text());

    let statuses = $('.main__block_checkbox');
    // for (let i = 0; i < statuses.length; i++) {
    //     console.log(statuses[i].checked);
    // }
    let sum = 0;
    for (let i = 0; i < costs.length; i++) {
        if (statuses[i].checked === true)
        {
            // console.log(costs[i].text);
            sum += parseInt(costs[i].text);
        }
            
    }
    // console.log(sum);

    $('.sum').text(sum);
})
