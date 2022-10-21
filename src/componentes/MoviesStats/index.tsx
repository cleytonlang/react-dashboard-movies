import { Container } from "./style";
import getData from "../../service/api";
import toast, { Toaster } from "react-hot-toast";
import {
  Card,
  Text,
  Metric,
  Flex,
  ProgressBar,
  Dropdown,
  DropdownItem,
} from "@tremor/react";
import { useEffect, useState } from "react";

type genreProps = {
  id: number;
  name: string;
};

export function MoviesStats() {
  const [genresList, setGenresList]: any = useState([]);

  async function loadGenres() {
    getData("/genre/movie/list")
      .then((response) => response.json())
      .then(({ genres }) => {
        setGenresList(genres);
      })
      .catch((error) => {
        toast.error(
          "Problem with the free API we use to find genres, please try again later!"
        );
      });
  }

  useEffect(() => {
    loadGenres();
  }, []);

  return (
    <Container>
      <Dropdown
        handleSelect={(value) => console.log("The selected value is", value)}
        placeholder="Select genre to filter"
      >
        <DropdownItem value={0} text="All" />
        {genresList
          ? genresList.map((genre: genreProps) => (
              <DropdownItem
                key={genre.name}
                value={genre.name}
                text={genre.name}
              />
            ))
          : null}
      </Dropdown>

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
      <Toaster />
    </Container>
  );
}
