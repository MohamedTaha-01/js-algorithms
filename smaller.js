function smaller(nums) {
  if (!nums) return;
  return nums.map((el, i) => {
    let smaller = 0;
    for (; i < nums.length; i++) {
      if (nums[i] < el) smaller++;
    }
    return smaller;
  });
}
