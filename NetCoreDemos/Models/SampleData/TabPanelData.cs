﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public static class TabPanelData {
        public static readonly IEnumerable<Company> Companies = new[] {
            new Company {
                ID = 1,
                Name = "SuprMart",
                Address = "702 SW 8th Street",
                City = "Bentonville",
                State = "Arkansas",
                ZipCode = 72716,
                Phone = "(800) 555-2797",
                Fax = "(800) 555-2171",
                Website = "http://www.nowebsitesupermart.dx"
            },
            new Company {
                ID = 2,
                Name = "El'Depot",
                Address = "2455 Paces Ferry Road NW",
                City = "Atlanta",
                State = "Georgia",
                ZipCode = 30339,
                Phone = "(800) 595-3232",
                Fax = "(800) 595-3231",
                Website = "http://www.nowebsitedepot.dx"
            },
            new Company {
                ID = 3,
                Name = "K&S Music",
                Address = "1000 Nicllet Mall",
                City = "Minneapolis",
                State = "Minnesota",
                ZipCode = 55403,
                Phone = "(612) 304-6073",
                Fax = "(612) 304-6074",
                Website = "http://www.nowebsitemusic.dx"
            },
            new Company {
                ID = 4,
                Name = "Tom Club",
                Address = "999 Lake Drive",
                City = "Issaquah",
                State = "Washington",
                ZipCode = 98027,
                Phone = "(800) 955-2292",
                Fax = "(800) 955-2293",
                Website = "http://www.nowebsitetomsclub.dx"
            }
        };

        public static readonly IEnumerable<TaskItem> NotStartedTaskItems = new[] {
            new TaskItem {
                status = "Not Started",
                priority = "high",
                text = "Revenue Projections",
                date = "2023/09/16",
                assignedBy = "John Heart"
            },
            new TaskItem {
                status = "Not Started",
                priority = "high",
                text = "New Brochures",
                date = "2023/09/16",
                assignedBy = "Samantha Bright"
            },
            new TaskItem {
                status = "Not Started",
                priority = "medium",
                text = "Training",
                date = "2023/09/16",
                assignedBy = "Arthur Miller"
            },
            new TaskItem {
                status = "Not Started",
                priority = "medium",
                text = "NDA",
                date = "2023/09/16",
                assignedBy = "Robert Reagan"
            },
            new TaskItem {
                status = "Not Started",
                priority = "low",
                text = "Health Insurance",
                date = "2023/09/16",
                assignedBy = "Greta Sims"
            }
        };

        public static readonly IEnumerable<TaskItem> HelpNeededTaskItems = new[] {
            new TaskItem {
                status = "Help Needed",
                priority = "low",
                text = "TV Recall",
                date = "2023/09/16",
                assignedBy = "Brett Wade"
            },
            new TaskItem {
                status = "Help Needed",
                priority = "low",
                text = "Recall and Refund Forms",
                date = "2023/09/16",
                assignedBy = "Sandra Johnson"
            },
            new TaskItem {
                status = "Help Needed",
                priority = "high",
                text = "Shippers",
                date = "2023/09/16",
                assignedBy = "Ed Holmes"
            },
            new TaskItem {
                status = "Help Needed",
                priority = "medium",
                text = "Hardware Upgrade",
                date = "2023/09/16",
                assignedBy = "Barb Banks"
            }
        };

        public static readonly IEnumerable<TaskItem> InProgressTaskItems = new[] {
            new TaskItem {
                status = "In Progress",
                priority = "medium",
                text = "Online Sales",
                date = "2023/09/16",
                assignedBy = "Cindy Stanwick"
            },
            new TaskItem {
                status = "In Progress",
                priority = "medium",
                text = "New Website Design",
                date = "2023/09/16",
                assignedBy = "Sammy Hill"
            },
            new TaskItem {
                status = "In Progress",
                priority = "low",
                text = "Bandwidth Increase",
                date = "2023/09/16",
                assignedBy = "Davey Jones"
            },
            new TaskItem {
                status = "In Progress",
                priority = "medium",
                text = "Support",
                date = "2023/09/16",
                assignedBy = "Victor Norris"
            },
            new TaskItem {
                status = "In Progress",
                priority = "low",
                text = "Training Material",
                date = "2023/09/16",
                assignedBy = "John Heart"
            }
        };

        public static readonly IEnumerable<TaskItem> DeferredTaskItems = new[] {
            new TaskItem {
                status = "Deferred",
                priority = "medium",
                text = "New Database",
                date = "2023/09/16",
                assignedBy = "Samantha Bright"
            },
            new TaskItem {
                status = "Deferred",
                priority = "high",
                text = "Automation Server",
                date = "2023/09/16",
                assignedBy = "Arthur Miller"
            },
            new TaskItem {
                status = "Deferred",
                priority = "medium",
                text = "Retail Sales",
                date = "2023/09/16",
                assignedBy = "Robert Reagan"
            },
            new TaskItem {
                status = "Deferred",
                priority = "medium",
                text = "Shipping Labels",
                date = "2023/09/16",
                assignedBy = "Greta Sims"
            }
        };

        public static readonly IEnumerable<TaskItem> RejectedTaskItems = new[] {
            new TaskItem {
                status = "Rejected",
                priority = "high",
                text = "Schedule Meeting with Sales Team",
                date = "2023/09/16",
                assignedBy = "Sandra Johnson"
            },
            new TaskItem {
                status = "Rejected",
                priority = "medium",
                text = "Confirm Availability for Sales Meeting",
                date = "2023/09/16",
                assignedBy = "Ed Holmes"
            },
            new TaskItem {
                status = "Rejected",
                priority = "medium",
                text = "Reschedule Sales Team Meeting",
                date = "2023/09/16",
                assignedBy = "Barb Banks"
            },
            new TaskItem {
                status = "Rejected",
                priority = "high",
                text = "Update Database with New Leads",
                date = "2023/09/16",
                assignedBy = "Kevin Carter"
            },
            new TaskItem {
                status = "Rejected",
                priority = "low",
                text = "Send Territory Sales Breakdown",
                date = "2023/09/16",
                assignedBy = "Cindy Stanwick"
            }
        };

        public static readonly IEnumerable<TaskItem> CompletedTaskItems = new[] {
            new TaskItem {
                status = "Completed",
                priority = "medium",
                text = "Territory Sales Breakdown Report",
                date = "2023/09/16",
                assignedBy = "Sammy Hill"
            },
            new TaskItem {
                status = "Completed",
                priority = "low",
                text = "Return Merchandise Report",
                date = "2023/09/16",
                assignedBy = "Davey Jones"
            },
            new TaskItem {
                status = "Completed",
                priority = "high",
                text = "Staff Productivity Report",
                date = "2023/09/16",
                assignedBy = "Victor Norris"
            },
            new TaskItem {
                status = "Completed",
                priority = "medium",
                text = "Review HR Budget Company Wide",
                date = "2023/09/16",
                assignedBy = "Mary Stern"
            }
        };

        public static readonly IEnumerable<TabPanelItem> TabPanelItems = new[] {
            new TabPanelItem {
                icon = "description",
                title = "Not Started",
                tasks = NotStartedTaskItems
            },
            new TabPanelItem {
                icon = "taskhelpneeded",
                title = "Help Needed",
                tasks = HelpNeededTaskItems
            },
            new TabPanelItem {
                icon = "taskinprogress",
                title = "In Progress",
                tasks = InProgressTaskItems
            },
            new TabPanelItem {
                icon = "taskstop",
                title = "Deferred",
                tasks = DeferredTaskItems
            },
            new TabPanelItem {
                icon = "taskrejected",
                title = "Rejected",
                tasks = RejectedTaskItems
            },
            new TabPanelItem {
                icon = "taskcomplete",
                title = "Completed",
                tasks = CompletedTaskItems
            }
        };
    }
}
