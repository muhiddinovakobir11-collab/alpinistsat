export interface TestMetadata {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  isAvailable: boolean;
  type: 'Full-Length' | 'Targeted';
}

export const testsList: TestMetadata[] = Array.from({ length: 20 }).map((_, i) => {
  let difficulty: 'Easy' | 'Medium' | 'Hard' = 'Medium';
  if (i < 5) difficulty = 'Easy';
  else if (i > 14) difficulty = 'Hard';

  return {
    id: `test-${i + 1}`,
    title: `Digital SAT Mock Test ${i + 1}`,
    difficulty,
    duration: '2 hrs 14 mins',
    isAvailable: i < 2, // First 2 are available immediately, others can be unlocked/generated
    type: 'Full-Length'
  };
});
