import React, { useState } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/button/Button';
import { Label } from '../../components/label/Label';

export const CardSearchFilter: React.FC = () => {
  const [cardName, setCardName] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    console.log(cardName);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Card Name
        <Input value={cardName} onChangeText={setCardName} />
      </Label>
      <Button>Search</Button>
    </form>
  );
};
