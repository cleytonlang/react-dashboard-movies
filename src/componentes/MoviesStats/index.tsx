import { Container } from "./style";
import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";
export function MoviesStats() {
  return (
    <Container>
      <Flex spaceX="space-x-5">
        <Card maxWidth="max-w-sm">
          <Text>Sales</Text>
          <Metric>$ 71,465</Metric>
          <Flex marginTop="mt-4">
            <Text>32% of annual target</Text>
            <Text>$ 225,000</Text>
          </Flex>
          <ProgressBar percentageValue={32} marginTop="mt-2" />
        </Card>

        <Card maxWidth="max-w-sm">
          <Text>Sales</Text>
          <Metric>$ 71,465</Metric>
          <Flex marginTop="mt-4">
            <Text>32% of annual target</Text>
            <Text>$ 225,000</Text>
          </Flex>
          <ProgressBar percentageValue={32} marginTop="mt-2" />
        </Card>

        <Card maxWidth="max-w-sm">
          <Text>Sales</Text>
          <Metric>$ 71,465</Metric>
          <Flex marginTop="mt-4">
            <Text>32% of annual target</Text>
            <Text>$ 225,000</Text>
          </Flex>
          <ProgressBar percentageValue={32} marginTop="mt-2" />
        </Card>
      </Flex>
    </Container>
  );
}
