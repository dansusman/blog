---
title: "How to Use Git Bisect"
author: "Dan Susman"
description: "A quick tip on finding bugs with git bisect"
type: "til"

summary: Git bisect is a powerful tool for finding the exact commit that introduced a bug by performing a binary search through your commit history.

date: 2024-01-20T10:00:00-00:00

draft: false

ogTitle: "How to Use Git Bisect for Bug Hunting"
ogDescription: "Learn how to use git bisect to quickly find the commit that introduced a bug"
---

# How to Use Git Bisect

Git bisect is one of those tools that seems magical when you first encounter it. When you have a bug that you know wasn't there before, but you're not sure when it was introduced, git bisect can help you find the exact commit that caused the problem.

## The Basic Process

Git bisect works by doing a binary search through your commit history. You tell it about a "good" commit (where the bug doesn't exist) and a "bad" commit (where the bug does exist), and it helps you narrow down the problematic commit.

Here's the basic workflow:

```bash
# Start the bisect process
git bisect start

# Mark the current commit as bad (has the bug)
git bisect bad

# Mark a known good commit (replace with actual commit hash)
git bisect good abc1234

# Git will check out a commit in the middle
# Test your code, then mark it as good or bad
git bisect good  # or git bisect bad

# Repeat until git identifies the problematic commit
# When done, return to your original state
git bisect reset
```

## Pro Tips

- **Automate the process**: If you have a test that can automatically detect the bug, you can use `git bisect run <test-command>` to automate the entire process.
- **Use relative references**: Instead of commit hashes, you can use references like `HEAD~10` for "10 commits ago"
- **Skip commits**: If a commit doesn't compile or can't be tested, use `git bisect skip`

Git bisect has saved me countless hours of manual debugging by pinpointing exactly when a regression was introduced. It's especially powerful in codebases with good test coverage.