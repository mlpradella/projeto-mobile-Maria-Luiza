import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/m.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Banco Marilux</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Bem vindo ao seu banco</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: ''
            })}
          </ThemedText>{' '}
          <Button color={'black'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="sua conta"
/>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Saldo:</ThemedText>
        <ThemedText>
          R$284,08
        </ThemedText>
      
        <Button color={'black'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="PIX"
/>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Limite total</ThemedText>
        <ThemedText>
          4.400,00{' '}
        </ThemedText>
      
      <ThemedText type="subtitle">Vencimento</ThemedText>
      <ThemedText>
          03/09/2027{' '}
      </ThemedText>

        <ThemedText type="subtitle">Faturas em Aberto</ThemedText>
        <ThemedText>
         Vencimento 05/10<br></br>R$998,45
        </ThemedText>
        <Button color={'black'}
      onPress={() => {
    console.log('You tapped the button!');
  }}
  title="ver mais"
/>

      <ThemedText>
        Vencimento 23/11<br></br>2.502,67
      </ThemedText>
      <Button color={'black'}
      onPress={() => {
    console.log('You tapped the button!');
  }}
  title="ver mais"
/>

<Button color={'black'}
      onPress={() => {
    console.log('You tapped the button!');
  }}
  title="VER MAIS FATURAS"
/>

        </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 320,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
