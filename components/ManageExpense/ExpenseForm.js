import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';

function ExpenseForm() {
  function amountChangeHandler() {}
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expenses Is Here</Text>
      <View style={styles.view}>
        <Input
          style={styles.rowInput}
          label={'Amount'}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onchangeText: amountChangeHandler,
          }}
        />
        <Input
          style={styles.rowInput}
          label={'Date'}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
          }}
        />
      </View>
      <Input
        label={'Description'}
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
});
