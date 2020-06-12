function render(data , type){
    for(let i = 0 ; i < data.length ; i++){
        let str = "";
        if(type == "daily_forecast"){
            let date = data[i].date.slice(5);
            let tmp = `${data[i].tmp_min}℃~${data[i].tmp_max}℃`;
            str = `
                <div class="weather-item fl">
                    <div class = "date">
                        <div>${date}</div>
                        <div>${data[i].cond_txt_d}</div>
                    </div>
                </div>
                <div class = "weather-icon>
                    <img class="auto-img" src = "./images/icon/${data[i].cond_cood}.png>
                </div>
                <div class = "date">${tmp}</div>
               `
        }else{
            let date  = data[i].time.split(" ")[1];
        }
    }
}