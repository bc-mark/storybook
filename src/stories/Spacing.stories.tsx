import {
  Box,
  Container,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useTheme,
  theme,
} from '@chakra-ui/react';
import { Meta, Story } from '@storybook/react';
import React from 'react';

function SpacingComponent() {
  const space: Record<string, any> = theme.space;

  return (
    <Container maxW="container.lg">
      <Heading mb="4">Spacing</Heading>

      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Value</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(space).map((s, i) => (
            <Tr key={i}>
              <Td>{s}</Td>
              <Td>{space[s]}</Td>
              <Td>
                <Box
                  sx={{
                    border: '1px',
                    borderColor: 'blackAlpha.100',
                    width: space[s],
                    height: '4',
                    bg: 'red.100',
                  }}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
}

export default {
  title: 'Branding Guidelines',
  component: SpacingComponent,
} as Meta;

const Template: Story = () => <SpacingComponent />;
export const Spacing = Template.bind({});
