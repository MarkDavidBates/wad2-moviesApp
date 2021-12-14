import React, { useEffect, useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getMovieCredits } from "../../api/tmdb-api";
import { excerpt } from "../../util";
import { useQuery } from "react-query";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

export default function MovieCredits({ movie }) {
  const classes = useStyles();
  const [credit, setCredits] = useState([]);
  const { data , error, isLoading, isError } = useQuery(
    ["credits", { id: movie.id }],
    getMovieCredits
  );

  useEffect(() => {
    getMovieCredits(movie.id).then((credits) => {
      setCredits(credits);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(getMovieCredits);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="credits table">
        <TableHead>
          <TableRow>
            <TableCell >Cast</TableCell>
            <TableCell align="center">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {credit.map((credits) => (
                <TableRow key={credits.id}>
                    <TableCell component="th" scope="row">
                        {credits.name}
                    </TableCell>
                    <TableCell >{excerpt(credits.character)}</TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}