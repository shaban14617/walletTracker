import { View } from 'react-native';
import Input from './Input';

function ExpenseForm() {
  function amountChangeHandler() {}
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Input
          label={'Amount'}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onchangeText: amountChangeHandler,
          }}
        />
        <Input
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
