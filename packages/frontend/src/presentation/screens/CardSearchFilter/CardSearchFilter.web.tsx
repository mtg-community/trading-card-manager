import React, { useState } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/button/Button';
import { Label } from '../../components/label/Label';
import { querySampleCard } from '../../../data/graphql/queries/SampleCardList';

export const CardSearchFilter: React.FC = () => {
  const [cardName, setCardName] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    querySampleCard().then(console.log);
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
