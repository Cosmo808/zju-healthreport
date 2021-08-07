    window.addEventListener("contentMsg", function(data) {
        // alert(data.detail)
        if(vm.hasFlag != "1"){
            var sfzx = '1'; // 是否在校，1表示在校，0表示不在校
            var province = '浙江', city = '杭州', district = '西湖'; // 修改你希望的所在地
            vm.info.sfzx = sfzx;
            vm.info.area = province + '省 ' + city + '市 ' + district + '区';
            vm.info.address = province + '省' + city + '市' + district + '区';
            vm.info.city = city + '市';
            vm.info.province = province +'省';
            vm.info.jrdqtlqk = ["0"];
            vm.info.sfymqjczrj = 0;
            vm.info.sfqrxxss = 1;
            vm.save();
            // alert('打卡成功');
            // window.dispatchEvent(new CustomEvent("injectedMsg", {detail: '打卡成功'}));
            setTimeout( function(){
                window.close();
            }, 1000);
        }else{
            // alert('已经打过卡了');
            // window.dispatchEvent(new CustomEvent("injectedMsg", {detail: '已经打过卡了'}));
            window.close();
        }
    }, false);
