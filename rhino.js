var currentPackageName = common.getlpparam().packageName;
//请手动将同方法的hook移至同一个hook代码内，否则后面的不会生效
if (currentPackageName == 'com.meitu.wink') {
    //𓆩本地会员|到期时间𓆪
common.hookMethod('com.meitu.library.mtsub.bean.VipInfoData', 'is_vip', [], function (param) {
     param.setResult(java.lang.Boolean.valueOf('true'));
}, function (param) {
    
}); 

common.hookMethod('com.meitu.library.mtsub.bean.VipInfoData', 'getInvalid_time', [], function (param) {
     param.setResult(java.lang.Long.valueOf('1880382071000'));
}, function (param) {
    
}); 


}
