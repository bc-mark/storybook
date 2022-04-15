import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  theme,
  Text,
  Code,
} from '@chakra-ui/react';
import { Meta, Story } from '@storybook/react';
import React from 'react';

const colors: Record<string, any> = theme.colors;

type TColorBox = {
  color: string;
  colorKey: string;
};

function ColorBox({ colorKey, color }: TColorBox) {
  return (
    <Flex sx={{ flex: 1, alignItems: 'center' }}>
      <Box
        sx={{
          border: '1px',
          borderColor: 'blackAlpha.100',
          borderRadius: 'md',
          boxSize: '48px',
          bg: colors[colorKey][color],
        }}
      />
      <Box sx={{ px: '4' }}>
        <Code fontSize="xs" px="2">
          {colorKey}.{color}
        </Code>
        <Text fontSize="10px" fontFamily="mono">
          {colors[colorKey][color]}
        </Text>
      </Box>
    </Flex>
  );
}

function ColorsComponent() {
  return (
    <Container maxW="container.lg">
      {Object.keys(colors).map((colorKey, i) => {
        const isString = typeof colors[colorKey] === 'string';

        if (isString) return null;

        return (
          <Box key={i} sx={{ mb: '10' }}>
            <Heading size="sm" sx={{ mb: '4', textTransform: 'capitalize' }}>
              {colorKey.replaceAll(/[A-Z]/g, ' $&')}
            </Heading>

            <Grid
              sx={{
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridGap: '6',
              }}
            >
              {Object.keys(colors[colorKey]).map((key, i) => (
                <ColorBox color={key} colorKey={colorKey} />
              ))}
            </Grid>
          </Box>
        );
      })}
    </Container>
  );
}

export default {
  title: 'Branding Guidelines',
  component: ColorsComponent,
} as Meta;

const Template: Story = () => <ColorsComponent />;
export const Colours = Template.bind({});
