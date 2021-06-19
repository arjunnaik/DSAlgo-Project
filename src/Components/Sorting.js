import BubbleSort from "./Sorting Algorithms/BubbleSort";
import BucketSort from "./Sorting Algorithms/BucketSort";
import HeapSort from "./Sorting Algorithms/HeapSort";
import InsertionSort from "./Sorting Algorithms/InsertionSort";
import MergeSort from "./Sorting Algorithms/MergeSort";
import QuickSort from "./Sorting Algorithms/QuickSort";
import RadixSort from "./Sorting Algorithms/RadixSort";
import SelectionSort from "./Sorting Algorithms/SelectionSort";

function Sorting() {
  return (
    <div>
      <BubbleSort />
      <BucketSort />
      <HeapSort />
      <InsertionSort />
      <MergeSort />
      <QuickSort />
      <RadixSort />
      <SelectionSort />
    </div>
  );
}
export default Sorting;
