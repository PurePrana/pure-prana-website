#!/bin/bash

# Script to close original issues that have been consolidated
# Run this AFTER creating the new consolidated issues

echo "Closing original issues that have been consolidated..."

# Map of original issues to their consolidated replacements
# Format: "original_issue:consolidated_issue_title"
declare -A issue_map=(
    # Sprint 0 consolidations
    ["1"]="Project Setup & Design System"
    ["3"]="Project Setup & Design System"
    ["4"]="Component Architecture"
    ["6"]="Component Architecture"
    ["8"]="Component Architecture"
    ["7"]="Development Tooling"
    ["9"]="Development Tooling"
    
    # Sprint 1 consolidations
    ["11"]="Product Display System"
    ["12"]="Product Display System"
    ["19"]="Product Display System"
    ["14"]="SEO Implementation"
    ["18"]="SEO Implementation"
    
    # Sprint 2 consolidations
    ["21"]="Blog Core Infrastructure"
    ["22"]="Blog Core Infrastructure"
    ["23"]="Blog Core Infrastructure"
    ["26"]="Blog Enhancement Features"
    ["27"]="Blog Enhancement Features"
    ["30"]="Blog Enhancement Features"
    ["31"]="Blog Enhancement Features"
    
    # Sprint 3 consolidations
    ["34"]="Static Pages Bundle"
    ["35"]="Static Pages Bundle"
    ["38"]="Technical SEO Bundle"
    ["40"]="Technical SEO Bundle"
)

# Function to close an issue
close_issue_with_reference() {
    local issue_number="$1"
    local consolidated_title="$2"
    
    echo "Closing issue #$issue_number..."
    
    # Find the new consolidated issue number
    # This assumes the consolidated issues have been created with the exact titles
    consolidated_issue=$(gh issue list \
        --repo PurePrana/pure-prana-website \
        --search "\"$consolidated_title\" in:title" \
        --limit 1 \
        --json number \
        --jq '.[0].number')
    
    if [ -n "$consolidated_issue" ]; then
        comment="This issue has been consolidated into #$consolidated_issue as part of our sprint optimization effort. The work described here will be completed as part of the consolidated issue."
    else
        comment="This issue has been consolidated into '$consolidated_title' as part of our sprint optimization effort. Please see the consolidated issue for the complete scope of work."
    fi
    
    # Add comment and close the issue
    gh issue comment $issue_number \
        --repo PurePrana/pure-prana-website \
        --body "$comment"
    
    gh issue close $issue_number \
        --repo PurePrana/pure-prana-website \
        --reason "not planned"
}

# Process all issues to be closed
for issue in "${!issue_map[@]}"; do
    close_issue_with_reference "$issue" "${issue_map[$issue]}"
    sleep 1  # Be nice to the API
done

echo "Issue consolidation cleanup complete!"
echo ""
echo "Summary of closed issues:"
echo "- Sprint 0: #1, #3, #4, #6, #7, #8, #9"
echo "- Sprint 1: #11, #12, #14, #18, #19"
echo "- Sprint 2: #21, #22, #23, #26, #27, #30, #31"
echo "- Sprint 3: #34, #35, #38, #40"