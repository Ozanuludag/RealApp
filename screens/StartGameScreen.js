import React, {useState} from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    TouchableWithoutFeedback,
    Keyboard 
} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input'

/**
 *  Parametre alan metodlar () => şeklinde çağırılır, fakat parametre almayan 'resetInputHandler gibi metodlar
 *  reset butonunda olduğu gibi direk yazılarak kullanılabilir.'
 * 
 */

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState(''); //Girilen Sayı
    const [confirmed, setConfirmed] = useState(false);    // Onaylanan sayı
    const [selectedNumber, setSelectedNumber] = useState(); //Seçilen sayı

    const numberInputHandler = inputText => {               //Girilen numarayı yakalayan metod- Inputta çalışır
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))   // Düzenli ifade ile sadece rakam girilebilir.
    };

    const resetInputHandler = () => {                       //Reset butonunda kullanılır Girilen sayıyı sıfırlar.
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if(chosenNumber === NaN || chosenNumber <= 0 || chosenNumber >99 ){
            return;
        }
       setConfirmed(true);
       setSelectedNumber(parseInt(enteredValue))    // Girilmiş sayıyı Int'e çevirir.
       setEnteredValue(''); // Girilen sayıyı yakaladıktan sonra confirm yapılır. Bu işlemden sonra inputta ki veriyi siler. Yani girilen sayıyı sıfırlar
    }

    let confirmedOutPut; // Girilen sayıyı text şeklinde çıktı almak için oluşturulan değişken.

    if(confirmed) {
    confirmedOutPut = <Text>Chosen Number: {selectedNumber}</Text>
    }
   /* let random = Math.floor(Math.random() * 100) + 1;
    console.log(random);

    if(random > selectedNumber) {
        alert('daha büyük bir sayı girin');
    }
    else if(random < selectedNumber) {

    }*/
    
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
         style= {styles.input} 
         blurOnSubmit autoCapitalize='none' 
         autoCorrect={false} 
         keyboardType="number-pad" 
         maxLength={2}
         onChangeText={numberInputHandler}
         value={enteredValue}
         />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>   
                <Button title="Reset" color={Colors.primary} onPress={resetInputHandler}/> 
            </View>
            <View style={styles.button}>   
                <Button title="Confirm" color={Colors.primary} onPress={confirmInputHandler}/> 
            </View>
        </View>
      </Card>
      {confirmedOutPut}
    </View>
</TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
      width: 100,
  },
  input: {
      textAlign:'center',
  }
});

export default StartGameScreen;
