import { Container } from "./style";
import { Card, Flex, AreaChart, BarChart } from "@tremor/react";
export function MoviesCharts() {
  const chartdata = [
    {
      date: "Jan 22",
      SemiAnalysis: 2890,
      "The Pragmatic Engineer": 2338,
    },
    {
      date: "Feb 22",
      SemiAnalysis: 2756,
      "The Pragmatic Engineer": 2103,
    },
    {
      date: "Mar 22",
      SemiAnalysis: 3322,
      "The Pragmatic Engineer": 2194,
    },
    {
      date: "Apr 22",
      SemiAnalysis: 3470,
      "The Pragmatic Engineer": 2108,
    },
    {
      date: "May 22",
      SemiAnalysis: 3475,
      "The Pragmatic Engineer": 1812,
    },
    {
      date: "Jun 22",
      SemiAnalysis: 3129,
      "The Pragmatic Engineer": 1726,
    },
  ];

  const dataFormatter = (number: number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };

  const chartdata1 = [
    {
      name: "Amphibians",
      "Number of threatened species": 2488,
    },
    {
      name: "Birds",
      "Number of threatened species": 1445,
    },
    {
      name: "Crustaceans",
      "Number of threatened species": 743,
    },
    {
      name: "Birds2",
      "Number of threatened species": 1445,
    },
    {
      name: "Crustaceans2",
      "Number of threatened species": 743,
    },
  ];

  const dataFormatter1 = (number: number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <Container>
      <Flex spaceX="space-x-5">
        <Card>
          <AreaChart
            data={chartdata}
            categories={["SemiAnalysis", "The Pragmatic Engineer"]}
            dataKey="date"
            height="h-80"
            colors={["indigo", "cyan"]}
            valueFormatter={dataFormatter}
            marginTop="mt-4"
          />
        </Card>

        <Card>
          <BarChart
            data={chartdata1}
            dataKey="name"
            height="h-80"
            categories={["Number of threatened species"]}
            colors={["blue"]}
            valueFormatter={dataFormatter1}
            marginTop="mt-6"
            yAxisWidth="w-12"
          />
        </Card>
      </Flex>
    </Container>
  );
}
