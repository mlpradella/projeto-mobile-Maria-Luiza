import { StyleSheet, Image, Platform, Button } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
         <Image
                  source={require('@/assets/images/m.jpg')}
                  style={styles.headerImage}
                />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Histórico</ThemedText>
      </ThemedView>
      <ThemedText>
        <Button color={'black'}
                  onPress={() => {
                    console.log('You tapped the button!');
                  }}
                  title="Buscar"
                />
      </ThemedText>

      <Collapsible title="Transferências">
        <ThemedText>
          Tranferência enviada<br></br>Bianca Pereira<br></br>R$99,99 PIX<br></br> <ThemedText type="defaultSemiBold">VER MAIS</ThemedText> {' '}
        </ThemedText>

        <ThemedText>
          Tranferência recebida<br></br> de Bianca Pereira<br></br>R$199,99<br></br><ThemedText type="defaultSemiBold">VER MAIS
        </ThemedText>{' '}
        </ThemedText>

  
      </Collapsible>
      <Collapsible title="Cartões">
        <ThemedText>
          Cartão Físico<br></br>Maria Santos{' '}
        </ThemedText>

        <ThemedText>
          Cartão Virtual<br></br>Maria Santos{' '}
        </ThemedText>
        <Button color={'black'}
                  onPress={() => {
                    console.log('You tapped the button!');
                  }}
                  title="Criar Cartão"
                />
      </Collapsible>
      <Collapsible title="Faturas pagas">
        <ThemedText>
          fatura paga<br></br>189,08<br></br><ThemedText type="defaultSemiBold">VER MAIS</ThemedText> 
        </ThemedText>
        <ThemedText>
          fatura atrasada<br></br>69,97<br></br><ThemedText type="defaultSemiBold">VER MAIS</ThemedText> 
        </ThemedText>

      </Collapsible>
      <Collapsible title="Boletos">
        <ThemedText>
          Pagamento em aberto<br></br><ThemedText type="defaultSemiBold">Mais informações</ThemedText>{' '}
        </ThemedText>
        <Button color={'black'}
                  onPress={() => {
                    console.log('You tapped the button!');
                  }}
                  title="QR code"
                />
                <ThemedText>
          Pagamento em aberto<br></br><ThemedText type="defaultSemiBold">Mais informações</ThemedText>{' '}
        </ThemedText>
        <Button color={'black'}
                  onPress={() => {
                    console.log('You tapped the button!');
                  }}
                  title="QR code"
                />
      </Collapsible>
      <Collapsible title="Senhas">
        <ThemedText>
          Senha do cartão físico{' '}<br></br>*********
        </ThemedText>
        <Button color={'black'}
                  onPress={() => {
                    console.log('You tapped the button!');
                  }}
                  title="VER SENHA"
                />
<ThemedText>
          Senha do banco{' '}<br></br>*********
        </ThemedText>
        <Button color={'black'}
                  onPress={() => {
                    console.log('You tapped the button!');
                  }}
                  title="VER SENHA"
                />

      </Collapsible>
      <Collapsible title="Caixinha">
        <ThemedText>
          <ThemedText type="defaultSemiBold">Meu dinheiro</ThemedText><br></br>Minha casa<br></br>8.956,04<br></br>
          <Button color={'black'}
                  onPress={() => {
                    console.log('You tapped the button!');
                  }}
                  title="Transferir"
                /><br></br>
                
          <Button color={'black'}
                  onPress={() => {
                    console.log('You tapped the button!');
                  }}
                  title="Resgatar"
                />

        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    height: 250,
    width: 320,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
