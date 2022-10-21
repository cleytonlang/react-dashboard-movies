import { Container } from "./style";
import getData from "../../service/api";
import toast, { Toaster } from "react-hot-toast";
import { Card, Flex, AreaChart, BarChart } from "@tremor/react";
import { useEffect, useState } from "react";

export function MoviesCharts() {
  const [certificationsList, setCertificationsList]: any = useState([]);

  async function loadCertifications() {
    getData("/certification/movie/list")
      .then((response) => response.json())
      .then(({ certifications }: any) => {
        const certif = Object.entries(certifications).map(
          (certification: any) => ({
            name: certification[0],
            "Number of certifications by Countries": certification[1].length,
          })
        );
        setCertificationsList(certif);
      })
      .catch((error) => {
        toast.error(
          "Problem with the free API we use to find certifications, please try again later!"
        );
      });
  }

  useEffect(() => {
    loadCertifications();
  }, []);

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
      </Flex>
      <Flex spaceX="space-x-5">
        <Card>
          <BarChart
            data={certificationsList}
            dataKey="name"
            height="h-80"
            categories={["Number of certifications by Countries"]}
            colors={["blue"]}
            marginTop="mt-6"
            yAxisWidth="w-12"
          />
        </Card>
      </Flex>
      <Toaster />
    </Container>
  );
}
