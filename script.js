// Default values
var heartDefault = 15.2;
var liverDefault = 3.8;
var otherDefault = 57;


//Batches counter
function batchCalc(){
       var batchesValue = document.getElementById('batchInput').value;
            batchesCalcHeart = ((batchesValue * heartDefault) * 10).toFixed(1);
            batchesCalcLiver = ((batchesValue * liverDefault) * 10).toFixed(1);
            batchesCalcOther = ((batchesValue * otherDefault) * 10).toFixed(1);

            document.getElementById('batches').innerHTML = "På " + batchesValue + " batchar så behöver du: <br> " + batchesCalcHeart + " gram hjärta. <br>" + batchesCalcLiver + " gram lever. <br>" + batchesCalcOther + " gram övrigt."
    ;}


// Main calculator for the three input fields
function catCalc(){
    var heartValue = document.getElementById('heartInput').value;
    var liverValue = document.getElementById('liverInput').value;
    var otherValue = document.getElementById('otherInput').value;


    if(heartValue.length > 0){
        heartPortions = (heartValue / heartDefault).toFixed(1);
        totAmountLiv = (heartPortions * liverDefault).toFixed(1);
        totAmountOth = (heartPortions * otherDefault).toFixed(1);
        batchCount = (heartPortions / 10).toFixed(1);
        document.getElementById('totSum').innerHTML = "Du får ut drygt " + heartPortions + " portioner och du behöver " + totAmountLiv + " gram lever och " + totAmountOth + " gram övrigt.";
        document.getElementById('batches').innerHTML = "(Detta ger cirka " + batchCount + " batches med kattmat.)";
    }
    if(liverValue.length > 0){
        liverPortions = (liverValue / liverDefault).toFixed(1);
        totAmountHeart = (liverPortions * heartDefault).toFixed(1);
        totAmountOth = (liverPortions * otherDefault).toFixed(1);
        batchCount = (liverPortions / 10).toFixed(1);
        document.getElementById('totSum').innerHTML = "Du får ut drygt " + liverPortions + " portioner och du behöver " + totAmountHeart + " gram hjärta och " + totAmountOth + " gram övrigt.";
        document.getElementById('batches').innerHTML = "(Detta ger cirka " + batchCount + " batches med kattmat.)";
    }
    if(otherValue.length > 0){
        otherPortions = (otherValue / otherDefault).toFixed(1);
        totAmountHeart = (otherPortions * heartDefault).toFixed(1);
        totAmountLiv = (otherPortions * liverDefault).toFixed(1);
        batchCount = (otherPortions / 10).toFixed(1);
        document.getElementById('totSum').innerHTML = "Du får ut drygt " + otherPortions + " portioner och du behöver " + totAmountHeart + " gram hjärta och " + totAmountLiv + " gram lever.";
        document.getElementById('batches').innerHTML = "(Detta ger cirka " + batchCount + " batches med kattmat.)";
    }

}






/*
Mått angivna 100%, dvs angivna siffror motsvarar 1 portion.
10 portioner är 1 batch.

Val1 = 15.2
Val2 = 3.8
Val3 = 57


Om val1 får input 300, så delas det med 100% (här 15.2) och för enkelhetens skull avrundas svaret(SUM) till ett
heltal, max en decimal.
Svaret(SUM) motsvarar antalet portioner och då ska svaret(SUM) multipliceras med val2 och även val3, separat från
varann. Detta för att visa mängden som behövs för resterande. Svaret(SUMrest) motsvarar då antal gram.

    Exemplet visar:

    300 / 15.2 = 19.7
input dividerat med var1 är lika med SUM (avrundat till en decimal)

    19.7 * 3.8 = 74.8
SUM multiplicerat med val2 är lika med SUMrest

    19.7 * 57 = 1122
SUM multiplicerat med val3 är lika med SUMrest


--

    19.7 / 10 = 1.97
Dividera SUM med 10 för att visa antal batchar avrundat till en decimal.
*/

