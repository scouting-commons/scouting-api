# Scouting America API endpoints

| Host | Method | Path | Read | In bundle | Status | App function |
| --- | --- | --- | :-: | :-: | --- | --- |
| api.cloud.precisely.com | POST | `/v1/autocomplete` | ✓ | ✓ | new | getPreciselyCassAddress |
| api.cloud.precisely.com | POST | `/v2/express-autocomplete` | ✓ | ✓ | new | getPreciselyExpressCassAddress |
| api.scouting.org | POST | `/advancements/{organizationGuid}/sbEducationRecords` | ✓ | ✓ | new | getEducationRecords |
| api.scouting.org | POST | `/advancements/{organizationGuid}/sbExtendedProfiles` |  | ✓ | new |  |
| api.scouting.org | GET | `/advancements/{userId}/paymentLogs` | ✓ | ✓ | open #45 | getUserPaymentLogs |
| api.scouting.org | ? | `/advancements/{userId}/paymentLogs/{logId}` | ? |  | new |  |
| api.scouting.org | POST | `/advancements/{userId}/pictureUpload` |  | ✓ | new | createPictureUpload |
| api.scouting.org | GET | `/advancements/activities/{activityId}` | ✓ | ✓ | new | getActivityDetails |
| api.scouting.org | DELETE | `/advancements/activities/{activityId}/collaborativeOrganizations/{collabOrgId}` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/activities/{activityId}/collaborativeOrganizations/add` |  | ✓ | new |  |
| api.scouting.org | PUT | `/advancements/activities/{activityId}/nonRegisteredOrganizationParticipants/{activityDetailsId}` |  | ✓ | new |  |
| api.scouting.org | PUT | `/advancements/activities/{activityId}/registeredParticipants` |  | ✓ | new | updateRegisteredParticipants |
| api.scouting.org | DELETE | `/advancements/activities/{activityId}/registeredParticipants/{activityRecordId}` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/advancementHistory` | ✓ | ✓ | new | getMeritBadgesHistory, getBulkAdvancementHistory, getBulkAdvancementHistoryToPurchase, getAdvancementHistory |
| api.scouting.org | GET | `/advancements/adventures` | ✓ | ✓ | in spec, closed #5 |  |
| api.scouting.org | GET | `/advancements/adventures/{adventureId}/requirements?versionId` | ✓ | ✓ | in spec, closed #6 | getAdventureRequirements |
| api.scouting.org | GET | `/advancements/awards` | ✓ | ✓ | in spec, closed #7 | getDictAwards |
| api.scouting.org | GET | `/advancements/awards/{awardId}` | ✓ | ✓ | in spec, closed #8 | getGeneralAdvancementDetails, getAdventureDetails, getMeritBadgeDetails, getRankDetails, getSSElectiveDetails, getAwardDetails |
| api.scouting.org | GET | `/advancements/awards/{awardId}/requirements?versionId` | ✓ | ✓ | in spec, closed #9 | getAwardRequirements |
| api.scouting.org | POST | `/advancements/events` | ✓ | ✓ | open #37 | getCalendarEvents, getMultipleCalendarEvents |
| api.scouting.org | GET | `/advancements/events/{eventId}` | ✓ | ✓ | new | getCalendarEvent |
| api.scouting.org | PUT | `/advancements/events/{eventId}` |  | ✓ | new | updateCalendarEvent |
| api.scouting.org | PUT | `/advancements/events/{eventId}/reminders/{reminderId}` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/events/{eventId}/reminders/add` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/events/add` |  | ✓ | new |  |
| api.scouting.org | GET | `/advancements/meritBadges` | ✓ | ✓ | in spec |  |
| api.scouting.org | GET | `/advancements/meritBadges/{meritBadgeId}/requirements?versionId` | ✓ | ✓ | in spec | getMeritBadgeRequirements |
| api.scouting.org | GET | `/advancements/ranks?status` | ✓ | ✓ | in spec |  |
| api.scouting.org | GET | `/advancements/ranks/{rankId}` | ✓ |  | in spec, closed #4 |  |
| api.scouting.org | GET | `/advancements/ranks/{rankId}/requirements` | ✓ |  | in spec |  |
| api.scouting.org | POST | `/advancements/setToLeaderApproved` |  | ✓ | new |  |
| api.scouting.org | GET | `/advancements/ssElectives` | ✓ | ✓ | in spec, closed #10 |  |
| api.scouting.org | GET | `/advancements/ssElectives/{ssElectiveId}/requirements?ssVersionId` | ✓ | ✓ | in spec, closed #11 |  |
| api.scouting.org | POST | `/advancements/unapprove` |  | ✓ | new | unapproveYouthAward |
| api.scouting.org | PUT | `/advancements/users/{userId}` |  | ✓ | new | updateSBProfile |
| api.scouting.org | PUT | `/advancements/users/{userId}/comments/{commentId}` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/v2/{organizationGuid}/email` |  | ✓ | new | postEmail |
| api.scouting.org | POST | `/advancements/v2/{organizationGuid}/email/attachment` |  | ✓ | new | postEmailAttachment |
| api.scouting.org | GET | `/advancements/v2/{organizationGuid}/purchaseOrders` | ✓ | ✓ | new | getUnitPurchaseOrders |
| api.scouting.org | POST | `/advancements/v2/{organizationGuid}/purchaseOrders` |  | ✓ | new | createPurchaseOrder |
| api.scouting.org | GET | `/advancements/v2/{organizationGuid}/purchaseOrders/{id}` | ✓ | ✓ | new | getPurchaseOrderDetails |
| api.scouting.org | PUT | `/advancements/v2/{organizationGuid}/purchaseOrders/{id}` |  | ✓ | new | updatePurchaseOrder |
| api.scouting.org | POST | `/advancements/v2/{organizationGuid}/purchaseOrders/{id}/items` |  | ✓ | new | updateItemPurchaseOrder |
| api.scouting.org | POST | `/advancements/v2/{organizationGuid}/purchaseOrders/{id}/items/delete` |  | ✓ | new | postDeleteItemPurchaseOrder |
| api.scouting.org | POST | `/advancements/v2/{organizationGuid}/sbExtendedProfile` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/v2/{organizationGuid}/sbSchoolInformation/quickEntry` |  | ✓ | new | postSbSchoolInformation |
| api.scouting.org | PUT | `/advancements/v2/{userId}/{advancementType}/{advancementId}/version` |  | ✓ | new |  |
| api.scouting.org | PUT | `/advancements/v2/{userId}/meritBadges/{meritBadgeId}/version` |  | ✓ | new | updateYouthMeritBadgeVersion |
| api.scouting.org | PUT | `/advancements/v2/{userId}/ranks/{rankId}/version` |  | ✓ | new | updateYouthRankVersion |
| api.scouting.org | GET | `/advancements/v2/{userId}/userActivitySummary` | ✓ | ✓ | new | getUserActivitySummary |
| api.scouting.org | POST | `/advancements/v2/activities?page&perPage` | ✓ | ✓ | open #38 | getActivities |
| api.scouting.org | DELETE | `/advancements/v2/activities/{activityId}` |  | ✓ | new |  |
| api.scouting.org | PUT | `/advancements/v2/activities/{activityId}` |  | ✓ | new | updateActivity |
| api.scouting.org | POST | `/advancements/v2/activities/{activityId}/registeredParticipants/add` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/v2/activities/add` |  | ✓ | new | addActivity |
| api.scouting.org | POST | `/advancements/v2/activities/approve` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/v2/activities/decline` |  | ✓ | new |  |
| api.scouting.org | GET | `/advancements/v2/adventures` | ✓ | ✓ | in spec, closed #31 | getAdventures |
| api.scouting.org | GET | `/advancements/v2/adventures/{adventureId}` | ✓ | ✓ | in spec, closed #32 | getGeneralAdvancementDetails, getAdventureDetails, getMeritBadgeDetails, getRankDetails, getSSElectiveDetails, getAwardDetails |
| api.scouting.org | GET | `/advancements/v2/denChief?c` | ✓ | ✓ | new | getDenChiefDetails |
| api.scouting.org | POST | `/advancements/v2/denChief/emailConfirmation` |  | ✓ | new | sendDenChiefEmail |
| api.scouting.org | POST | `/advancements/v2/denChief/reviewPosition` |  | ✓ | new | reviewDenChiefPosition |
| api.scouting.org | POST | `/advancements/v2/denChief/search` | ✓ | ✓ | new | searchDenChief |
| api.scouting.org | DELETE | `/advancements/v2/events/{eventId}` |  | ✓ | new |  |
| api.scouting.org | GET | `/advancements/v2/events/{eventId}/guests` | ✓ | ✓ | new |  |
| api.scouting.org | POST | `/advancements/v2/events/{eventId}/guests` |  | ✓ | new |  |
| api.scouting.org | DELETE | `/advancements/v2/events/{eventId}/guests/{calendarEventGuestId}` |  | ✓ | new |  |
| api.scouting.org | PUT | `/advancements/v2/events/{eventId}/guests/{calendarEventGuestId}` |  | ✓ | new |  |
| api.scouting.org | GET | `/advancements/v2/events/{eventId}/invitees` | ✓ | ✓ | new |  |
| api.scouting.org | POST | `/advancements/v2/events/{eventId}/invitees` |  | ✓ | new |  |
| api.scouting.org | PUT | `/advancements/v2/events/{eventId}/invitees` |  | ✓ | new |  |
| api.scouting.org | DELETE | `/advancements/v2/events/{eventId}/invitees/{userId}` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/v2/events/{eventId}/invitees/delete` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/v2/events/{eventId}/organizations/add` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/v2/events/{eventId}/permissionSlipProfiles` |  | ✓ | new | postPermissionSlipProfiles |
| api.scouting.org | DELETE | `/advancements/v2/events/{eventId}/reminders/{reminderId}` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/v2/events/{eventId}/reminders/send` |  | ✓ | new |  |
| api.scouting.org | GET | `/advancements/v2/events/{eventId}/requirements` | ✓ | ✓ | new |  |
| api.scouting.org | POST | `/advancements/v2/events/{eventId}/requirements` |  | ✓ | new |  |
| api.scouting.org | PUT | `/advancements/v2/events/{eventId}/rsvp` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/v2/events/{eventId}/rsvp/send` |  | ✓ | new |  |
| api.scouting.org | DELETE | `/advancements/v2/events/{eventId}/units?orgId` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/v2/events/comments` | ✓ | ✓ | new |  |
| api.scouting.org | DELETE | `/advancements/v2/events/comments/{commentId}` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/v2/events/comments/add` |  | ✓ | new |  |
| api.scouting.org | DELETE | `/advancements/v2/events/recurringEvents/{recurringEventId}` |  | ✓ | new |  |
| api.scouting.org | PUT | `/advancements/v2/events/recurringEvents/{recurringEventId}` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/v2/events/recurringEvents/add` |  | ✓ | new |  |
| api.scouting.org | GET | `/advancements/v2/meritBadges` | ✓ | ✓ | in spec, closed #33 | getDictMeritBadges |
| api.scouting.org | GET | `/advancements/v2/meritBadges/{meritBadgeId}` | ✓ | ✓ | in spec, closed #34 | getGeneralAdvancementDetails, getAdventureDetails, getMeritBadgeDetails, getRankDetails, getSSElectiveDetails, getAwardDetails |
| api.scouting.org | GET | `/advancements/v2/meritBadges/counselors/{memberId}/profile` | ✓ | ✓ | new | GetMeritBadgeCounselorProfile |
| api.scouting.org | GET | `/advancements/v2/meritBadges/counselors/{personGuidOrMID}/dashboard` | ✓ | ✓ | new | getMBCDashboard |
| api.scouting.org | POST | `/advancements/v2/meritBadges/counselors/assignMeritBadges` |  | ✓ | new | assignMeritBadgeCounselorBadges |
| api.scouting.org | POST | `/advancements/v2/meritBadges/counselors/assignToYouth` |  | ✓ | new | assignMBCToYouth |
| api.scouting.org | GET | `/advancements/v2/meritBadges/counselors/classes` | ✓ | ✓ | new | GetCounselorClasses |
| api.scouting.org | POST | `/advancements/v2/meritBadges/counselors/classes` |  | ✓ | new | PostCreateCounselorClass |
| api.scouting.org | DELETE | `/advancements/v2/meritBadges/counselors/classes/{counselorClassId}` |  | ✓ | new | DeleteCounselorClass |
| api.scouting.org | PUT | `/advancements/v2/meritBadges/counselors/classes/{counselorClassId}` |  | ✓ | new | PutUpdateCounselorClass |
| api.scouting.org | POST | `/advancements/v2/meritBadges/counselors/classes/{counselorClassId}/scouts` |  | ✓ | new | PostAddScoutsToClass |
| api.scouting.org | POST | `/advancements/v2/meritBadges/counselors/classes/{counselorClassId}/scouts/removeMembership` |  | ✓ | new | PostRemoveScoutsFromClass |
| api.scouting.org | POST | `/advancements/v2/meritBadges/counselors/removeFromYouth` |  | ✓ | new | removeCounselorFromYouth |
| api.scouting.org | POST | `/advancements/v2/meritBadges/counselors/removeMeritBadges` |  | ✓ | new | removeMeritBadgeCounselorBadge |
| api.scouting.org | POST | `/advancements/v2/meritBadges/counselors/search` | ✓ | ✓ | new | postMBCounselorsSearch |
| api.scouting.org | POST | `/advancements/v2/meritBadges/counselors/youths/assigned` | ✓ | ✓ | new | GetCounselorsAssignedToYouths |
| api.scouting.org | POST | `/advancements/v2/meritBadges/counselors/youths/removeMeritBadges` |  | ✓ | new | removeMBCYouthMB |
| api.scouting.org | POST | `/advancements/v2/organization/{organizationGuid}/meritBadges/printBlueCard` |  | ✓ | new | postMeritBadgeBlueCards |
| api.scouting.org | GET | `/advancements/v2/organization/{orgGuid}/adventures/{adventureId}/userRequirements` | ✓ | ✓ | new | getBulkUserAdventureRequirements |
| api.scouting.org | GET | `/advancements/v2/organization/{orgGuid}/awards/{awardId}/userRequirements` | ✓ | ✓ | new | getBulkUserAwardRequirements |
| api.scouting.org | GET | `/advancements/v2/organization/{orgGuid}/balanceDetails` | ✓ | ✓ | new | GetMembersPaymentLogsBalance |
| api.scouting.org | GET | `/advancements/v2/organization/{orgGuid}/meritBadges/{meritBadgeId}/userRequirements` | ✓ | ✓ | new | getBulkUserMeritBadgeRequirements |
| api.scouting.org | GET | `/advancements/v2/organization/{orgGUID}/meritBadges/importFile` | ✓ | ✓ | new | getImportFileStatus |
| api.scouting.org | POST | `/advancements/v2/organization/{orgGUID}/meritBadges/importFile` |  | ✓ | new | uploadMBFile |
| api.scouting.org | DELETE | `/advancements/v2/organization/{orgGUID}/meritBadges/importFile/{importFileID}` |  | ✓ | new | deleteMBFile |
| api.scouting.org | POST | `/advancements/v2/organization/{orgGUID}/meritBadges/importFile/{importFileID}/start` |  | ✓ | new | startMBFileProcessing |
| api.scouting.org | GET | `/advancements/v2/organization/{orgGUID}/meritBadges/requirements/importFile` | ✓ | ✓ | new | getImportFileRequirements |
| api.scouting.org | GET | `/advancements/v2/organization/{orgGuid}/paymentLogs` | ✓ | ✓ | new | getUnitPaymentLogs |
| api.scouting.org | DELETE | `/advancements/v2/organization/{orgGuid}/paymentLogs/{paymentLogId}` |  | ✓ | new | deletePaymentLog |
| api.scouting.org | PUT | `/advancements/v2/organization/{orgGuid}/paymentLogs/{paymentLogId}` |  | ✓ | new | putPaymentLog |
| api.scouting.org | POST | `/advancements/v2/organization/{orgGuid}/paymentLogs/{paymentLogId}/processPayment` |  | ✓ | new | processPayment |
| api.scouting.org | GET | `/advancements/v2/organization/{orgGuid}/paymentLogSummary` | ✓ | ✓ | new | GetUnitPaymentLogsSummary |
| api.scouting.org | GET | `/advancements/v2/organization/{orgGuid}/ranks/{rankId}/userRequirements` | ✓ | ✓ | new | getBulkUserRankRequirements |
| api.scouting.org | POST | `/advancements/v2/organization/meritBadges/printBlueCard` |  | ✓ | new | postBulkMbcMeritBadgeBlueCards |
| api.scouting.org | GET | `/advancements/v2/ranks` | ✓ | ✓ | in spec, closed #28 | getRanks |
| api.scouting.org | GET | `/advancements/v2/ranks/{rankId}` | ✓ | ✓ | in spec, closed #29 | getGeneralAdvancementDetails, getAdventureDetails, getMeritBadgeDetails, getRankDetails, getSSElectiveDetails, getAwardDetails |
| api.scouting.org | GET | `/advancements/v2/ranks/{rankId}/requirements?versionId` | ✓ | ✓ | in spec, closed #30 | getRankRequirements |
| api.scouting.org | GET | `/advancements/v2/ssElectives/{ssElectiveId}` | ✓ | ✓ | in spec, closed #35 | getGeneralAdvancementDetails, getAdventureDetails, getMeritBadgeDetails, getRankDetails, getSSElectiveDetails, getAwardDetails |
| api.scouting.org | PUT | `/advancements/v2/unit/{unitId}` |  | ✓ | new |  |
| api.scouting.org | GET | `/advancements/v2/users/{userId}/calendars` | ✓ | ✓ | new |  |
| api.scouting.org | POST | `/advancements/v2/users/{userId}/calendars` |  | ✓ | new |  |
| api.scouting.org | PUT | `/advancements/v2/users/{userId}/calendars/{userCalendarId}` |  | ✓ | new |  |
| api.scouting.org | DELETE | `/advancements/v2/users/{userId}/comments/{commentId}` |  | ✓ | new | deleteAdvComment |
| api.scouting.org | PUT | `/advancements/v2/users/{userId}/comments/{commentId}` |  | ✓ | new | editAdvComment |
| api.scouting.org | DELETE | `/advancements/v2/users/{userId}/comments/{commentId}/photos/{photoId}` |  | ✓ | new | deleteAdvCommentPhoto |
| api.scouting.org | POST | `/advancements/v2/users/{userId}/comments/add` |  | ✓ | new | addAdvComments |
| api.scouting.org | POST | `/advancements/v2/users/{userId}/comments/addFile` |  | ✓ | new | addFileAdvComments |
| api.scouting.org | POST | `/advancements/v2/users/{userId}/events/addFile` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/v2/users/{userId}/events/bulkDelete` |  | ✓ | new | bulkRemoveFromEvents |
| api.scouting.org | POST | `/advancements/v2/users/{youthUserId}/comments` | ✓ | ✓ | open #39 | fetchAdvComments |
| api.scouting.org | POST | `/advancements/v2/users/awards/{awardId}` |  | ✓ | new | postUserAward |
| api.scouting.org | POST | `/advancements/v2/users/awards/{awardId}/requirements` |  | ✓ | new | postUserAwardRequirements |
| api.scouting.org | POST | `/advancements/v2/users/paymentLogs` |  | ✓ | new | postPaymentLog |
| api.scouting.org | POST | `/advancements/v2/users/paymentLogs/comments` | ✓ | ✓ | new | getPaymentLogComments |
| api.scouting.org | POST | `/advancements/v2/users/paymentLogs/comments/add` |  | ✓ | new | addPaymentLogComments |
| api.scouting.org | POST | `/advancements/v2/youth/{advancementType}/{advancementId}/requirements` |  | ✓ | new |  |
| api.scouting.org | GET | `/advancements/v2/youth/{userId}/{advancementType}/{advancementId}/requirements` | ✓ | ✓ | new |  |
| api.scouting.org | GET | `/advancements/v2/youth/{userId}/adventures` | ✓ | ✓ | new | getYouthAdventures |
| api.scouting.org | GET | `/advancements/v2/youth/{userId}/adventures/{adventureId}/requirements` | ✓ | ✓ | new | getYouthAdventureRequirements |
| api.scouting.org | GET | `/advancements/v2/youth/{userId}/awards` | ✓ | ✓ | new | getYouthAwards |
| api.scouting.org | PUT | `/advancements/v2/youth/{userId}/awards/{awardId}` |  | ✓ | new | updateYouthAwardV2 |
| api.scouting.org | GET | `/advancements/v2/youth/{userId}/awards/{awardId}/requirements` | ✓ | ✓ | new | getYouthAwardRequirements |
| api.scouting.org | POST | `/advancements/v2/youth/{userId}/leadershipPositionHistory` |  | ✓ | new | createYouthLeadershipPosition |
| api.scouting.org | DELETE | `/advancements/v2/youth/{userId}/leadershipPositionHistory/{id}` |  | ✓ | new | deleteYouthLeadershipPosition, bulkDeleteUnitsLeadershipPositions |
| api.scouting.org | PUT | `/advancements/v2/youth/{userId}/leadershipPositionHistory/{id}` |  | ✓ | new | updateYouthLeadershipPosition, bulkUpdateYouthLeadershipPositions |
| api.scouting.org | GET | `/advancements/v2/youth/{userId}/meritBadges` | ✓ | ✓ | new | getYouthMeritBadges |
| api.scouting.org | GET | `/advancements/v2/youth/{userId}/meritBadges/{meritBadgeId}` | ✓ | ✓ | new | getYouthMeritBadgeDetails |
| api.scouting.org | GET | `/advancements/v2/youth/{userId}/ranks` | ✓ | ✓ | new | getYouthRanks |
| api.scouting.org | GET | `/advancements/v2/youth/{userId}/ranks/{rankId}` | ✓ | ✓ | new | getYouthRankDetails |
| api.scouting.org | GET | `/advancements/v2/youth/{userId}/ranks/{rankId}/requirements` | ✓ | ✓ | new | getYouthRankRequirements |
| api.scouting.org | GET | `/advancements/v2/youth/{userId}/ssElectives` | ✓ | ✓ | new | getYouthSSElectives |
| api.scouting.org | POST | `/advancements/v2/youth/adventures/{adventureId}/requirements` |  | ✓ | new | postYouthAdventuresRequirements |
| api.scouting.org | POST | `/advancements/v2/youth/awards/{awardId}/requirements` |  | ✓ | new | updateYouthAwardRequirements |
| api.scouting.org | POST | `/advancements/v2/youth/meritBadges/{meritBadgeId}/requirements` |  | ✓ | new | postBulkYouthMeritBadgeRequirements |
| api.scouting.org | POST | `/advancements/v2/youth/ranks/{rankId}/requirements` |  | ✓ | new | postBulkYouthRankRequirements, postYouthRankRequirements |
| api.scouting.org | POST | `/advancements/verifyUserAdvancement` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/youth/{advancementType}` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/youth/{userId}/{advancementType}` |  | ✓ | new |  |
| api.scouting.org | PUT | `/advancements/youth/{userId}/{advancementType}/{advancementId}` |  | ✓ | new | updateYouthAdvancement |
| api.scouting.org | PUT | `/advancements/youth/{userId}/adventures/{adventureId}` |  | ✓ | new |  |
| api.scouting.org | ? | `/advancements/youth/{userId}/awards` | ? |  | new |  |
| api.scouting.org | PUT | `/advancements/youth/{userId}/awards/{awardId}/{userAwardId}` |  | ✓ | new | updateYouthAward |
| api.scouting.org | GET | `/advancements/youth/{userId}/leadershipPositionHistory?summary` | ✓ | ✓ | new | getYouthLeadershipPositions |
| api.scouting.org | POST | `/advancements/youth/{userId}/meritBadges` |  | ✓ | new |  |
| api.scouting.org | PUT | `/advancements/youth/{userId}/meritBadges/{meritBadgeId}` |  | ✓ | new |  |
| api.scouting.org | ? | `/advancements/youth/{userId}/ranks` | ? |  | new |  |
| api.scouting.org | PUT | `/advancements/youth/{userId}/ranks/{rankId}` |  | ✓ | new |  |
| api.scouting.org | GET | `/advancements/youth/{userId}/ssElectives` | ✓ | ✓ | new |  |
| api.scouting.org | POST | `/advancements/youth/adventures` |  | ✓ | new |  |
| api.scouting.org | POST | `/advancements/youth/awards` |  | ✓ | new | createYouthAward |
| api.scouting.org | POST | `/advancements/youth/meritBadges` |  | ✓ | new | postYouthMeritBadges |
| api.scouting.org | POST | `/advancements/youth/ranks` |  | ✓ | new |  |
| api.scouting.org | GET | `/commissioners/v2/organizations/{organizationGuid}/unitsHealth/manualEntry` | ✓ | ✓ | new | getUnitsHealthManualEntry |
| api.scouting.org | POST | `/commissioners/v2/organizations/{organizationGuid}/unitsHealth/manualEntry` |  | ✓ | new | addUnitsHealthManualEntry |
| api.scouting.org | PUT | `/commissioners/v2/organizations/{organizationGuid}/unitsHealth/manualEntry/{unitHealthIndicatorManualEntryGuid}` |  | ✓ | new | updateUnitsHealthManualEntry |
| api.scouting.org | POST | `/events/communications` |  | ✓ | new | postEventsCommunications |
| api.scouting.org | DELETE | `/events/communications/{eventGuid}` |  | ✓ | new | deleteEventsCommunications |
| api.scouting.org | GET | `/events/communications/organizations` | ✓ | ✓ | new | getEventsCommunicationsOrganizations |
| api.scouting.org | GET | `/lookups/address/addressTypes` | ✓ |  | in spec, closed #14 |  |
| api.scouting.org | GET | `/lookups/address/countries` | ✓ | ✓ | in spec |  |
| api.scouting.org | GET | `/lookups/address/states` | ✓ | ✓ | in spec |  |
| api.scouting.org | GET | `/lookups/advancements/activityCategories` | ✓ | ✓ | in spec | lookupActivityCategories |
| api.scouting.org | GET | `/lookups/advancements/activityCollaborativeOrganizations` | ✓ | ✓ | new | getLookupActivityCollabOrgs |
| api.scouting.org | GET | `/lookups/advancements/activityTypes` | ✓ |  | in spec |  |
| api.scouting.org | GET | `/lookups/advancements/akelaMeritBadges` | ✓ | ✓ | new | getDictAkelaMeritBadges |
| api.scouting.org | GET | `/lookups/advancements/calendarEventTypes` | ✓ | ✓ | in spec |  |
| api.scouting.org | GET | `/lookups/advancements/meritBadgeCategories` | ✓ |  | in spec, closed #13 |  |
| api.scouting.org | GET | `/lookups/advancements/positions` | ✓ | ✓ | in spec | getLookupAdvancementsPositions |
| api.scouting.org | GET | `/lookups/advancements/ranks` | ✓ |  | in spec, closed #12 |  |
| api.scouting.org | GET | `/lookups/advancements/swimmingClassification` | ✓ | ✓ | in spec |  |
| api.scouting.org | GET | `/lookups/advancements/unitTimezone` | ✓ | ✓ | in spec |  |
| api.scouting.org | GET | `/lookups/advancements/unitTypes` | ✓ |  | in spec |  |
| api.scouting.org | GET | `/lookups/advancements/youthLeadershipPositions` | ✓ | ✓ | in spec |  |
| api.scouting.org | GET | `/lookups/communications/classifications` | ✓ |  | in spec |  |
| api.scouting.org | GET | `/lookups/communications/communicationTypes` | ✓ | ✓ | in spec |  |
| api.scouting.org | GET | `/lookups/communications/mobilePhoneCarrier` | ✓ | ✓ | in spec |  |
| api.scouting.org | GET | `/lookups/communications/phoneCountryCodes` | ✓ | ✓ | in spec |  |
| api.scouting.org | GET | `/lookups/communications/socialMedia` | ✓ |  | in spec, closed #55 |  |
| api.scouting.org | GET | `/lookups/organizations/positions` | ✓ |  | in spec |  |
| api.scouting.org | GET | `/lookups/organizations/programs` | ✓ |  | new |  |
| api.scouting.org | GET | `/lookups/organizations/types` | ✓ |  | in spec |  |
| api.scouting.org | GET | `/lookups/organizations/unitTypes` | ✓ |  | in spec, closed #15 |  |
| api.scouting.org | GET | `/lookups/person/employers` | ✓ |  | in spec, closed #23 |  |
| api.scouting.org | GET | `/lookups/person/ethnicities` | ✓ |  | in spec, closed #18 |  |
| api.scouting.org | GET | `/lookups/person/genders` | ✓ |  | in spec, closed #17 |  |
| api.scouting.org | GET | `/lookups/person/grades` | ✓ | ✓ | in spec |  |
| api.scouting.org | GET | `/lookups/person/maritalStatuses` | ✓ |  | in spec, closed #20 |  |
| api.scouting.org | GET | `/lookups/person/nameSuffixes` | ✓ | ✓ | in spec |  |
| api.scouting.org | GET | `/lookups/person/occupations` | ✓ |  | in spec, closed #21 |  |
| api.scouting.org | GET | `/lookups/person/occupationTypes` | ✓ |  | in spec, closed #22 |  |
| api.scouting.org | GET | `/lookups/person/positions` | ✓ | ✓ | in spec | getLookupPersonPositions |
| api.scouting.org | GET | `/lookups/person/relationshipTypes` | ✓ | ✓ | in spec, closed #16 |  |
| api.scouting.org | GET | `/lookups/person/religions` | ✓ |  | in spec, closed #19 |  |
| api.scouting.org | GET | `/lookups/person/schools?name&city&state&zip` | ✓ | ✓ | in spec |  |
| api.scouting.org | GET | `/lookups/person/titlePrefixes` | ✓ | ✓ | in spec |  |
| api.scouting.org | GET | `/lookups/registrations/paymentTypes` | ✓ |  | in spec, closed #25 |  |
| api.scouting.org | GET | `/lookups/registrations/renewalOptoutReasons` | ✓ | ✓ | in spec | getLookupOptoutReasons |
| api.scouting.org | GET | `/lookups/registrations/statuses` | ✓ |  | in spec, closed #24 |  |
| api.scouting.org | GET | `/lookups/trainings/courses` | ✓ |  | in spec, closed #26 |  |
| api.scouting.org | POST | `/organizations/{organizationGuid}/advancementsReadyToBeAwarded` | ✓ | ✓ | new | getAdvancementsReadyAward |
| api.scouting.org | GET | `/organizations/{organizationGuid}/districtAndSubDistricts` | ✓ | ✓ | new |  |
| api.scouting.org | GET | `/organizations/{organizationGuid}/orgTrainingSummary` | ✓ |  | open #97 |  |
| api.scouting.org | POST | `/organizations/camps/search` | ✓ | ✓ | new |  |
| api.scouting.org | GET | `/organizations/councils` | ✓ |  | new |  |
| api.scouting.org | POST | `/organizations/organizationsWithinRadius` | ✓ | ✓ | new |  |
| api.scouting.org | GET | `/organizations/positions/{organizationGuid}` | ✓ | ✓ | new | getOrgPositions |
| api.scouting.org | POST | `/organizations/positions/{orgGuid}/reassignPositions` |  | ✓ | new | postReassignPositions |
| api.scouting.org | POST | `/organizations/units/search?unitStatus` | ✓ | ✓ | new | getCouncilUnits |
| api.scouting.org | ? | `/organizations/v2/{organizationGuid}/adults` | ? |  | new |  |
| api.scouting.org | GET | `/organizations/v2/{organizationGuid}/advancementDashboard` | ✓ | ✓ | new | getOrgAdvancementsDashboard |
| api.scouting.org | GET | `/organizations/v2/{organizationGuid}/denChief` | ✓ | ✓ | new | getUnitDenChiefs |
| api.scouting.org | GET | `/organizations/v2/{organizationGuid}/districts` | ✓ |  | new |  |
| api.scouting.org | GET | `/organizations/v2/{organizationGuid}/key3` | ✓ |  | new |  |
| api.scouting.org | GET | `/organizations/v2/{organizationGuid}/members` | ✓ |  | new |  |
| api.scouting.org | GET | `/organizations/v2/{organizationGuid}/orders` | ✓ | ✓ | new | getUnitOrders |
| api.scouting.org | POST | `/organizations/v2/{organizationGuid}/orgAdults` | ✓ | ✓ | new | getOrgAdults, getMultipleOrgAdults |
| api.scouting.org | POST | `/organizations/v2/{organizationGuid}/orgYouths` | ✓ | ✓ | open #85 (says GET) | getOrgYouths, getMultipleOrgYouths |
| api.scouting.org | GET | `/organizations/v2/{organizationGuid}/profile` | ✓ | ✓ | in spec, closed #36 | getOrganizationProfile |
| api.scouting.org | GET | `/organizations/v2/{organizationGuid}/recipients` | ✓ | ✓ | new | getRecipients |
| api.scouting.org | GET | `/organizations/v2/{organizationGuid}/registrations` | ✓ |  | new |  |
| api.scouting.org | GET | `/organizations/v2/{organizationGuid}/unitActivitiesDashboard` | ✓ | ✓ | open #87 | getOrgActivityDashboard |
| api.scouting.org | ? | `/organizations/v2/{organizationGuid}/youths` | ? |  | new |  |
| api.scouting.org | POST | `/organizations/v2/{orgGuid}/denChief/add` |  | ✓ | new | addDenChief |
| api.scouting.org | POST | `/organizations/v2/{orgGuid}/denChief/remove` |  | ✓ | new | removeDenChief |
| api.scouting.org | GET | `/organizations/v2/payment/{orgGuid}/stripe/onboardURL` | ✓ | ✓ | new | getOrganizationOnboardUrl |
| api.scouting.org | GET | `/organizations/v2/payment/{orgGuid}/stripe/profile` | ✓ | ✓ | new | getOrganizationPaymentProfile |
| api.scouting.org | POST | `/organizations/v2/payment/{orgGuid}/stripe/profile` |  | ✓ | new | postOrganizationPaymentProfile |
| api.scouting.org | PUT | `/organizations/v2/payment/{orgGuid}/stripe/profile` |  | ✓ | new | putOrganizationPaymentProfile |
| api.scouting.org | GET | `/organizations/v2/units/{organizationGuid}/adults` | ✓ | ✓ | new | getUnitRosterAdults |
| api.scouting.org | GET | `/organizations/v2/units/{organizationGuid}/parents` | ✓ | ✓ | new | getUnitRosterParents |
| api.scouting.org | GET | `/organizations/v2/units/{organizationGuid}/youths` | ✓ | ✓ | new | getUnitRosterYouths |
| api.scouting.org | DELETE | `/organizations/v2/units/{orgGuid}/{subUnitType}/{subUnitId}` |  | ✓ | new | deleteSubUnit |
| api.scouting.org | PUT | `/organizations/v2/units/{orgGuid}/{subUnitType}/{subUnitId}` |  | ✓ | new | UpdateSubUnit |
| api.scouting.org | POST | `/organizations/v2/units/{orgGuid}/{subUnitType}/{subUnitId}/adults` |  | ✓ | new | addAdultsToSubUnit |
| api.scouting.org | DELETE | `/organizations/v2/units/{orgGuid}/{subUnitType}/{subUnitId}/users?userId` |  | ✓ | new | deleteUserFromSubUnit |
| api.scouting.org | POST | `/organizations/v2/units/{orgGuid}/{subUnitType}/{subUnitId}/youths` |  | ✓ | new | addYouthsToSubUnit |
| api.scouting.org | POST | `/organizations/v2/units/{orgGuid}/{subUnitType}/add` |  | ✓ | new | createSubUnit |
| api.scouting.org | GET | `/organizations/v2/units/{orgGuid}/leadershipPositions` | ✓ | ✓ | new | getUnitLeadershipPositions |
| api.scouting.org | POST | `/organizations/v2/units/{orgGuid}/leadershipPositions` |  | ✓ | new | createUnitLeadershipPositions |
| api.scouting.org | PUT | `/organizations/v2/units/{orgGuid}/leadershipPositions` |  | ✓ | new | updateUnitLeadershipPositions |
| api.scouting.org | GET | `/organizations/v2/units/{orgGuid}/pendingLeadershipPositions` | ✓ | ✓ | new | getUnitPendingLeadershipPositions |
| api.scouting.org | GET | `/organizations/v2/units/{orgGuid}/subUnitAdults` | ✓ | ✓ | new | getSubUnitAdults |
| api.scouting.org | GET | `/organizations/v2/units/{orgGuid}/subUnits` | ✓ | ✓ | new | getSubUnits, getMultipleSubUnits |
| api.scouting.org | GET | `/organizations/v2/units/{orgGuid}/subUnitYouths` | ✓ | ✓ | new | getSubUnitYouths |
| api.scouting.org | GET | `/organizations/v2/units/{unitId}/paymentLogCategories` | ✓ | ✓ | new | getPaymentLogCategories |
| api.scouting.org | PUT | `/persons/{personGuid}/membershipRegistrations/{registrationId}` |  | ✓ | new | updateMembershipRegistration |
| api.scouting.org | GET | `/persons/{personGuid}/memberships` | ✓ |  | new |  |
| api.scouting.org | GET | `/persons/{personGuid}/myScout` | ✓ | ✓ | new |  |
| api.scouting.org | GET | `/persons/{personGuid}/positions` | ✓ |  | new |  |
| api.scouting.org | GET | `/persons/{personGuid}/profile` | ✓ | ✓ | new | getUserMystProfile |
| api.scouting.org | POST | `/persons/{personGuid}/profile/hobbies/{hobbyId}` |  | ✓ | new |  |
| api.scouting.org | PUT | `/persons/{personGuid}/profile/hobbies/{hobbyId}` |  | ✓ | new |  |
| api.scouting.org | POST | `/persons/{personGuid}/profilePicture` |  | ✓ | new | createProfilePicture |
| api.scouting.org | PUT | `/persons/{personGuid}/profilePicture` |  | ✓ | new | updateProfilePicture |
| api.scouting.org | GET | `/persons/{personGuid}/renewalRelationships` | ✓ | ✓ | new | getPersonRenewalRelationships |
| api.scouting.org | GET | `/persons/{personGuid}/roleTypes` | ✓ | ✓ | open #48 | getRoleTypes |
| api.scouting.org | GET | `/persons/{personGuid}/subscriptions` | ✓ | ✓ | new | getUserSubscriptions |
| api.scouting.org | POST | `/persons/{personGuid}/subscriptions` |  | ✓ | new | createSubscription |
| api.scouting.org | PUT | `/persons/{personGuid}/subscriptions/{id}` |  | ✓ | new | updateSubscription |
| api.scouting.org | ? | `/persons/{personGuid}/trainings` | ? |  | new |  |
| api.scouting.org | GET | `/persons/advancementImports?organizationGuid` | ✓ | ✓ | new | getUnitAdvancementImports |
| api.scouting.org | POST | `/persons/advancementImports?organizationGuid` |  | ✓ | new | uploadAdvancementImport |
| api.scouting.org | DELETE | `/persons/advancementImports/{id}` |  | ✓ | new | cancelAdvancementImport |
| api.scouting.org | POST | `/persons/positions/{personGuid}/assignFunctional` |  | ✓ | new | postAssignFunctionalPositions |
| api.scouting.org | POST | `/persons/positions/{personGuid}/expireFunctional` |  | ✓ | new | postExpireFunctionalPositions |
| api.scouting.org | GET | `/persons/v2/{memberId}/orders` | ✓ |  | new |  |
| api.scouting.org | POST | `/persons/v2/{personGuid}/deleteProfileInfo` |  | ✓ | new | deleteProfileInfo |
| api.scouting.org | POST | `/persons/v2/{personGuid}/membershipRegistrations` | ✓ | ✓ | open #53 | getMembershipRegistrations |
| api.scouting.org | GET | `/persons/v2/{personGuid}/parentGuardianInvitation` | ✓ | ✓ | new | getParentGuardianInvitation |
| api.scouting.org | GET | `/persons/v2/{personGuid}/parentGuardianInvitation/{invitationId}` | ✓ | ✓ | new | getParentGuardianInvitationDetails |
| api.scouting.org | DELETE | `/persons/v2/{personGuid}/parentGuardianInvitation/{parentRequestId}` |  | ✓ | new | deleteParentGuardianInvitation |
| api.scouting.org | POST | `/persons/v2/{personGuid}/parentGuardianInvitation/{parentRequestId}/accept` |  | ✓ | new | postParentGuardianInvitationAccept |
| api.scouting.org | POST | `/persons/v2/{personGuid}/parentGuardianInvitation/create` |  | ✓ | new | postParentGuardianInvitation |
| api.scouting.org | PUT | `/persons/v2/{personGuid}/profile` |  | ✓ | new | updateAkelaProfile |
| api.scouting.org | POST | `/persons/v2/{personGuid}/profile/hobbies/{hobbyId}` |  | ✓ | new |  |
| api.scouting.org | PUT | `/persons/v2/{personGuid}/profile/hobbies/{hobbyId}` |  | ✓ | new |  |
| api.scouting.org | GET | `/persons/v2/{personGuid}/relationships?includeIneligibles` | ✓ | ✓ | open #47 | getRelationships |
| api.scouting.org | DELETE | `/persons/v2/{personGuid}/relationships/{relationshipId}` |  | ✓ | new | deleteRelationship |
| api.scouting.org | GET | `/persons/v2/{personGuid}/trainings/positionTrainingRequirements` | ✓ |  | new |  |
| api.scouting.org | GET | `/persons/v2/{personGuid}/trainings/ypt` | ✓ | ✓ | new | getPersonTrainingsYPT |
| api.scouting.org | GET | `/persons/v2/{userId}/personprofile` | ✓ | ✓ | open #46 | getPersonProfile, getCompletePersonProfile |
| api.scouting.org | GET | `/persons/v2/masterMemberId` | ✓ |  | new |  |
| api.scouting.org | POST | `/persons/v2/relationshipSearch` | ✓ | ✓ | new | postPersonSearchByMemberId |
| api.scouting.org | GET | `/registrations/{registrationId}` | ✓ |  | new |  |
| api.scouting.org | GET | `/registrations/v2/precisely/token` | ✓ | ✓ | new | authenticatePrecisely |
| auth.scouting.org | GET | `/api/users/{memberId}/sessions/masquerade` | ✓ | ✓ | new | masquerade |
| auth.scouting.org | POST | `/api/users/{username}/authenticate` |  | ✓ | in spec | authenticate |
| auth.scouting.org | GET | `/api/users/auth/refresh` | ✓ | ✓ | in spec, closed #101 | sessionRefresh |
| auth.scouting.org | GET | `/api/users/auth/social` | ✓ | ✓ | new | socialAuthenticate |
| auth.scouting.org | GET | `/api/users/logout` | ✓ | ✓ | new | logout |
| auth.scouting.org | GET | `/api/users/self_{guid}/sessions/current` | ✓ | ✓ | new | oldSessionRefresh |
| my.scouting.org | POST | `/api/users/{username}/authenticate` |  |  | new |  |
| my.scouting.org | POST | `/vim2/WebScript/Output/proxy.aspx?Method=ExecuteContainerAPI&Container=SBL_MB_Scout_Matrix&API=SavePersonSelection` |  | ✓ | new | generateClassWorksheet |
| my.scouting.org | GET | `/vim2/WebScript/Output/proxy.aspx?Method=ExecuteContainerAPI&Container=SBLReportMenu&API=GetReportListByOrg` | ✓ | ✓ | new | GetReportListByOrg |
| my.scouting.org | GET | `/vim2/WebScript/Output/proxy.aspx?Method=ExecuteContainerAPI&Container=SBLReportMenu&API=GetReportListByPG` | ✓ | ✓ | new | GetReportListByPG |
| my.scouting.org | GET | `/vim2/WebScript/Output/proxy.aspx?Method=ExecuteContainerAPI&Container=SBLReportMenu&API=GetReportListByUser` | ✓ | ✓ | new | GetReportListByUser |
| my.scouting.org | POST | `/vim2/WebScript/Output/proxy.aspx?Method=ExecuteContainerAPI&Container=SBLSharedReportsManagerAPI&API=DeleteSelectedReports` |  | ✓ | new | PostDeleteCustomReport |
| my.scouting.org | GET | `/vim2/WebScript/Output/proxy.aspx?Method=ExecuteContainerAPI&Container=SBLSharedReportsManagerAPI&API=ReportPresentation` | ✓ | ✓ | new | GetReportPresentation |
| my.scouting.org | POST | `/vim2/WebScript/Output/proxy.aspx?Method=ExecuteContainerAPI&Container=SBLSharedReportsManagerAPI&API=ShareSelectedReports` |  | ✓ | new | PostShareCustomReport |
| my.scouting.org | POST | `/vim2/WebScript/Output/proxy.aspx?Method=ExecuteContainerAPI&Container=SBLSharedReportsManagerAPI&API=UnshareSelectedReports` |  | ✓ | new | PostUnshareCustomReport |
| my.scouting.org | GET | `/vim2/WebScript/Output/proxy.aspx?Method=ExecuteContainerAPI&Container=SBReportBuilderDesigner&API=ReportPresentation` | ✓ | ✓ | new | (opened as page) |
| my.scouting.org | GET | `/vim2/WebScript/Output/proxy.aspx?Method=ExecuteContainerAPI&Container=SBRosterBuilderDesigner&API=ReportPresentation` | ✓ | ✓ | new | (opened as page) |
| my.scouting.org | POST | `/vim2/WebScript/Output/proxy.aspx?Method=ExecuteContainerAPI&Container=SBRosterReportsManagerAPI&API=DeleteSelectedReports` |  | ✓ | new | PostDeleteRosterCustomReport |
| my.scouting.org | GET | `/vim2/WebScript/Output/proxy.aspx?Method=ExecuteContainerAPI&Container=SBRosterReportsManagerAPI&API=ReportPresentation` | ✓ | ✓ | new | GetRosterReportPresentation |
| my.scouting.org | POST | `/vim2/WebScript/Output/proxy.aspx?Method=ExecuteContainerAPI&Container=SBRosterReportsManagerAPI&API=ShareSelectedReports` |  | ✓ | new | PostShareRosterCustomReport |
| my.scouting.org | POST | `/vim2/WebScript/Output/proxy.aspx?Method=ExecuteContainerAPI&Container=SBRosterReportsManagerAPI&API=UnshareSelectedReports` |  | ✓ | new | PostUnshareRosterCustomReport |
| my.scouting.org | POST | `/vim2/WebScript/Output/proxy.aspx?Method=ExecuteScriptSet&ScriptSetCode=MYSTAccount&ScriptCode=PersonSearch` | ✓ | ✓ | new | postPersonSearch |
| my.scouting.org | GET | `/vim2/WebScript/Output/proxy.aspx?Method=ExecuteScriptSet&ScriptSetCode=SBEagleScoutRankApplication&ScriptCode=ProcessPrintEditablePDF` | ✓ | ✓ | new | (opened as page) |
| my.scouting.org | GET | `/vim2/WebScript/Output/proxy.aspx?Method=ExecuteScriptSet&ScriptSetCode=SBLAdvancementReport&ScriptCode=ReportPresentation` | ✓ | ✓ | new |  |
| my.scouting.org | GET | `/vim2/WebScript/Output/proxy.aspx?Method=ExecuteScriptSet&ScriptSetCode=SBLite&ScriptCode=GetPOListByDate` | ✓ | ✓ | new |  |
| my.scouting.org | POST | `/vim2/WebScript/Output/proxy.aspx?Method=ExecuteScriptSet&ScriptSetCode=SBLUnitRosterReport&ScriptCode=ReportPresentation` | ✓ | ✓ | new |  |
| payments.scouting.org | POST | `/api/stripe/checkoutCreate` |  | ✓ | new | checkoutCreate |
| payments.scouting.org | POST | `/api/stripe/createCheckoutIntent` |  | ✓ | new | createCheckoutIntent |
| payments.scouting.org | GET | `/api/stripe/merchantStatus` | ✓ | ✓ | new | getMerchantStatus |
| reportspd.scouting.org | POST | `/advancements/webscript/output/sbreports.aspx?Application=MYST&Method=ExecuteScriptSet&ScriptCode=SaveScoutSelection` |  | ✓ | new |  |
| reportspd.scouting.org | GET | `/advancements/webscript/output/sbreports.aspx?Method=ExecuteContainerAPI&Container=SBAdvancementStoryReport&API=PrintEditablePDF` | ✓ | ✓ | new |  |
| reportspd.scouting.org | GET | `/advancements/webscript/output/sbreports.aspx?method=executescriptset&scriptcode=ReportPresentation&ApplicationType=SBL&scriptsetcode={reportCode}` | ✓ | ✓ | new | (opened as page) |
| reportspd.scouting.org | GET | `/advancements/webscript/output/sbreports.aspx?Method=ExecuteScriptSet&ScriptSetCode=SBLUnitRosterLiteReport&ScriptCode=PrintJSON` | ✓ | ✓ | new | getUnitRosterLiteReport |
| reportspd.scouting.org | GET | `/advancements/webscript/output/sbreports.aspx?Method=ExecuteScriptSet&ScriptSetCode=SBRSVPReport&ScriptCode=ReportPresentation` | ✓ | ✓ | new | (opened as page) |
| scoutbook.scoutshop.org | POST | `/rest/V1/guest-carts` |  | ✓ | new | createGuestCart$ |
| scoutbook.scoutshop.org | POST | `/rest/V1/guest-carts/{cartToken}/multiItems` |  | ✓ | new | updateGuestCart$ |
| scoutconnect-api.scouting.org | GET | `/councils` | ✓ |  | in spec |  |
| scoutconnect-api.scouting.org | GET | `/organizations/{organizationId}` | ✓ |  | in spec |  |
| scoutconnect-api.scouting.org | GET | `/organizations/legacy-unit/{legacyUnitId}` | ✓ |  | new |  |
| scoutconnect-api.scouting.org | POST | `/organizations/search` |  |  | in spec |  |
| scoutconnect-api.scouting.org | GET | `/zip-codes/{zipCode}/coordinates` | ✓ |  | in spec |  |
