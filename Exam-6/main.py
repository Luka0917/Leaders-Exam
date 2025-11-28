# leetcode.com/problems/single-number/

class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) == 2: return nums
        for i in list(set(nums)):
            if nums.count(i) == 1:
                return i