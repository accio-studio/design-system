import React from 'react';
import Component from 'react-component-component';
import { modularScale } from 'polished';
import { storiesOf } from '@storybook/react';
import { RadixProvider } from './RadixProvider';
import { theme } from './theme';
import { Box } from './components/Box';
import { Flex } from './components/Flex';
import { Text } from './components/Text';
import { Divider } from './components/Divider';
import { Heading } from './components/Heading';
import { Button } from './components/Button';

const colorfulTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    purple: 'rgb(113, 20, 234)',
    brightPink: 'hotpink',
    orange: 'orange',
    turquoise: 'turquoise',
  },
  buttons: {
    pedro: {
      background: 'gold',
      color: 'royalblue',
      boxShadow: 'inset 0 0 0 1px royalblue',
    },
  },
};

storiesOf('Theme|RadixProvider', module).add('typescale', () => (
  <Component initialState={{ theme }}>
    {({ state, setState }) => {
      const makeScale = scale => {
        return {
          ...theme,
          fontSizes: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6].map(n => {
            return modularScale(n, '1rem', scale);
          }),
        };
      };

      const setScale = e => setState({ theme: makeScale(e.target.value) });

      return (
        <>
          <Flex
            flexDirection="column"
            textAlign="center"
            alignItems="flex-start"
            style={{ position: 'absolute', right: 20, top: 20 }}
          >
            <Box mb={2}>Type scales</Box>
            <label>
              <input
                type="radio"
                name="scale"
                key="default"
                value="default"
                defaultChecked
                onChange={() => setState({ theme })}
              />
              default
            </label>
            {[
              'minorSecond',
              'majorThird',
              'goldenSection',
              'minorSixth',
              'perfectFifth',
            ].map(scale => (
              <label>
                <input
                  key={scale}
                  type="radio"
                  name="scale"
                  value={scale}
                  onChange={setScale}
                />
                {scale}
              </label>
            ))}
          </Flex>

          <RadixProvider theme={state.theme}>
            <>
              <Box>
                <Text as="p" fontSize={0}>
                  Radix
                </Text>
                <Text as="p" fontSize={1}>
                  Radix
                </Text>
                <Text as="p" fontSize={2}>
                  Radix
                </Text>
                <Text as="p" fontSize={3}>
                  Radix
                </Text>
                <Text as="p" fontSize={4}>
                  Radix
                </Text>
                <Text as="p" fontSize={5}>
                  Radix
                </Text>
                <Text as="p" fontSize={6}>
                  Radix
                </Text>
                <Text as="p" fontSize={7}>
                  Radix
                </Text>
                <Text as="p" fontSize={8}>
                  Radix
                </Text>
                <Text as="p" fontSize={9}>
                  Radix
                </Text>
                <Text as="p" fontSize={10}>
                  Radix
                </Text>
              </Box>
            </>
          </RadixProvider>
        </>
      );
    }}
  </Component>
));

storiesOf('Theme|RadixProvider', module).add('colourful', () => (
  <RadixProvider theme={colorfulTheme}>
    <>
      <Box>
        <Heading color="orange">My colourful theme 🌈</Heading>
        <Divider my={5} />
        <Heading as="h2" color="purple">
          My purple
        </Heading>
        <Heading as="h2" color="brightPink">
          My pink
        </Heading>
        <Heading as="h2" color="turquoise">
          My turquoise
        </Heading>
        <Heading as="h2" color="red">
          My red
        </Heading>

        <Button variant="pedro">Pedro's button</Button>
      </Box>
    </>
  </RadixProvider>
));
