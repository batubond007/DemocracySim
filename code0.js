gdjs.InitialQuestionsCode = {};
gdjs.InitialQuestionsCode.localVariables = [];
gdjs.InitialQuestionsCode.GDBackgroundObjects1= [];
gdjs.InitialQuestionsCode.GDBackgroundObjects2= [];
gdjs.InitialQuestionsCode.GDGreenButtonWithShadowObjects1= [];
gdjs.InitialQuestionsCode.GDGreenButtonWithShadowObjects2= [];
gdjs.InitialQuestionsCode.GDFlatHeartBarObjects1= [];
gdjs.InitialQuestionsCode.GDFlatHeartBarObjects2= [];


gdjs.InitialQuestionsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithShadow"), gdjs.InitialQuestionsCode.GDGreenButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InitialQuestionsCode.GDGreenButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.InitialQuestionsCode.GDGreenButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.InitialQuestionsCode.GDGreenButtonWithShadowObjects1[k] = gdjs.InitialQuestionsCode.GDGreenButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.InitialQuestionsCode.GDGreenButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.InitialQuestionsCode.GDFlatHeartBarObjects1);
{for(var i = 0, len = gdjs.InitialQuestionsCode.GDFlatHeartBarObjects1.length ;i < len;++i) {
    gdjs.InitialQuestionsCode.GDFlatHeartBarObjects1[i].SetValue(gdjs.InitialQuestionsCode.GDFlatHeartBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.InitialQuestionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InitialQuestionsCode.GDBackgroundObjects1.length = 0;
gdjs.InitialQuestionsCode.GDBackgroundObjects2.length = 0;
gdjs.InitialQuestionsCode.GDGreenButtonWithShadowObjects1.length = 0;
gdjs.InitialQuestionsCode.GDGreenButtonWithShadowObjects2.length = 0;
gdjs.InitialQuestionsCode.GDFlatHeartBarObjects1.length = 0;
gdjs.InitialQuestionsCode.GDFlatHeartBarObjects2.length = 0;

gdjs.InitialQuestionsCode.eventsList0(runtimeScene);
gdjs.InitialQuestionsCode.GDBackgroundObjects1.length = 0;
gdjs.InitialQuestionsCode.GDBackgroundObjects2.length = 0;
gdjs.InitialQuestionsCode.GDGreenButtonWithShadowObjects1.length = 0;
gdjs.InitialQuestionsCode.GDGreenButtonWithShadowObjects2.length = 0;
gdjs.InitialQuestionsCode.GDFlatHeartBarObjects1.length = 0;
gdjs.InitialQuestionsCode.GDFlatHeartBarObjects2.length = 0;


return;

}

gdjs['InitialQuestionsCode'] = gdjs.InitialQuestionsCode;
