import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";


import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";


const SimilarExercises = ({ targetMusclesExercises, equipmentExercises }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentMuscleExercises = targetMusclesExercises.slice(indexOfFirstExercise, indexOfLastExercise);
  const currentEquipmentExercises = equipmentExercises.slice(indexOfFirstExercise, indexOfLastExercise);
  const paginate = (e, value) => {
    setCurrentPage(value);
  };
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Typography variant="h3" mb={5}>Exercises that target the same muscle group</Typography>
      <Stack direction={'row'} sx={{ p: '2', position: 'relative' }}>
        {targetMusclesExercises.length ? currentMuscleExercises.map((exercise) => (
          <ExerciseCard key={currentMuscleExercises.id} exercise={exercise} />
        )) :
          <Loader />
        }
      </Stack>
      <Stack mt={'100px'} alignItems={'center'}>
        {targetMusclesExercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(targetMusclesExercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
      <Typography variant="h3" mb={5}>Exercises that use the same equipment</Typography>
      <Stack direction={'row'} sx={{ p: '2', position: 'relative' }}>
        {equipmentExercises.length ? currentEquipmentExercises.map((exercise) => (
          <ExerciseCard key={currentEquipmentExercises.id} exercise={exercise} />
        )) :
          <Loader />
        }
      </Stack>
      <Stack mt={'100px'} alignItems={'center'}>
        {targetMusclesExercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(targetMusclesExercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;