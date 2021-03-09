{
	"app_name": "Insight",
	"theme": "light",
	"uri": "insight://",
	"start_route": "mytoday",
	"displayNavigation": "false",
	"watch_list_preferences": false,
	"features": [{
		"id": "research",
		"url": "/features/research/0.1.6/insight-desktop-research.js",
		"lazyload": "false"
	}, {
		"id": "meetings",
		"url": "/features/meetings/0.0.9/insight-desktop-meetings.js",
		"lazyload": "false"
	}, {
		"id": "coverage",
		"url": "/features/coverage/0.0.2/insight-desktop-coverage.js",
		"lazyload": "false"
	}, {
		"id": "issuerPilot",
		"url": "/features/issuer/0.0.2/insight-desktop-issuer.js",
		"lazyload": "false"
	}, {
		"id": "core",
		"url": "/features/core/0.0.1/insight-desktop-core.js",
		"lazyload": "false"
	}],
	"jumplinks": {
		"mediacasts": {
			"title": "Mediacasts",
			"headerId": "Mediacasts",
			"id": "media-casts",
			"display": false,
			"order": 1
		},
		"research": {
			"title": "Research",
			"headerId": "RecommendedResearch",
			"id": "research",
			"display": false,
			"order": 3
		},
		"events": {
			"title": "Events",
			"headerId": "RecommendedEvents",
			"id": "events",
			"display": false,
			"order": 2
		},
		"deals": {
			"title": "Deals",
			"headerId": "Deals",
			"id": "deals",
			"display": false,
			"order": 0
		}
	},
	"pages": [{
		"id": "preferences",
		"displayName": "Preferences",
		"order": "1",
		"route": "preferences",
		"template": "research-list",
		"subPage": "true",
		"parent": "mytoday",
		"components": [{
			"id": "rsch-inner-header",
			"hostedUrl": null,
			"input": {
				"pageTitle": "Preferences",
				"pageId": "preferences"
			},
			"output": null,
			"positionId": "inner-header-container"
		}, {
			"id": "idwc-core-preferences-single-card",
			"hostedUrl": null,
			"input": {},
			"output": null,
			"positionId": "research-container"
		}]
	}, {
		"id": "mytoday",
		"displayName": "My Today",
		"order": "1",
		"route": "mytoday",
		"template": "issuer-mytoday",
		"subPage": "false",
		"parent": "mytoday",
		"components": [{
			"id": "issuer-deals-list",
			"hostedUrl": null,
			"input": {},
			"output": null,
			"positionId": "insight-row-0-col-1"
		}, {
			"id": "rsch-podcasts-spotlight",
			"hostedUrl": null,
			"input": {},
			"output": null,
			"positionId": "insight-row-1-col-2"
		}, {
			"id": "idwc-coverage-single-card",
			"hostedUrl": null,
			"input": {},
			"output": null,
			"positionId": "insight-row-2-col-1"
		}, {
			"id": "idwc-meeting-single-card",
			"hostedUrl": null,
			"input": {
				"context": "banking"
			},
			"output": null,
			"positionId": "insight-row-2-col-2"
		}, {
			"id": "issuer-priced-deals-card",
			"hostedUrl": null,
			"input": {},
			"output": null,
			"positionId": "insight-row-2-col-3"
		}, {
			"id": "issuer-all-priced-deals-card",
			"hostedUrl": null,
			"input": {},
			"output": null,
			"positionId": "insight-row-8-col-1"
		}, {
			"id": "rsch-podcasts-cards",
			"hostedUrl": null,
			"input": {},
			"output": null,
			"positionId": "insight-row-3-col-1"
		}, {
			"id": "issuer-deals-charts",
			"hostedUrl": null,
			"input": {},
			"output": null,
			"positionId": "insight-row-11-col-1"
		}, {
			"id": "rsch-recommended-reports-cards",
			"hostedUrl": null,
			"input": {},
			"output": null,
			"positionId": "insight-row-5-col-1"
		}, {
			"id": "rsch-recommended-events-cards",
			"hostedUrl": null,
			"input": {},
			"output": null,
			"positionId": "insight-row-7-col-1"
		}]
	}, {
		"id": "meeting-detail",
		"displayName": "Today's Meetings",
		"order": "1",
		"route": "meeting-detail",
		"template": "meeting",
		"subPage": "true",
		"parent": "mytoday",
		"components": [{
			"id": "rsch-inner-header",
			"hostedUrl": null,
			"input": {
				"pageTitle": "Today's Meetings",
				"pageId": "meeting-detail"
			},
			"output": null,
			"positionId": "inner-header-container"
		}, {
			"id": "idwc-meeting-detail-list-card",
			"hostedUrl": null,
			"input": {
				"context": "banking"
			},
			"output": null,
			"positionId": "meeting-detail-list-container"
		}]
	}, {
		"id": "coverage-detail",
		"displayName": "My Contacts",
		"order": "1",
		"route": "coverage-detail",
		"template": "coverage",
		"subPage": "true",
		"parent": "mytoday",
		"components": [{
			"id": "rsch-inner-header",
			"hostedUrl": null,
			"input": {
				"pageTitle": "My Contacts",
				"pageId": "coverage-detail"
			},
			"output": null,
			"positionId": "inner-header-container"
		}, {
			"id": "idwc-coverage-detail-list-card",
			"hostedUrl": null,
			"input": {
				"context": "markets"
			},
			"output": null,
			"positionId": "coverage-detail-list-container"
		}]
	}, {
		"id": "deals",
		"displayName": "Deals",
		"order": "3",
		"route": "deals",
		"template": "research-list",
		"subPage": "true",
		"parent": "mytoday",
		"components": [{
			"id": "rsch-inner-header",
			"hostedUrl": null,
			"input": {
				"pageTitle": "Deals",
				"pageId": "deals"
			},
			"output": null,
			"positionId": "inner-header-container"
		}, {
			"id": "rsch-deals-page",
			"hostedUrl": null,
			"input": {},
			"output": null,
			"positionId": "research-container"
		}]
	}, {
		"id": "research",
		"displayName": "Research",
		"order": "3",
		"route": "research",
		"template": "research-list",
		"subPage": "true",
		"parent": "mytoday",
		"components": [{
			"id": "rsch-inner-header",
			"hostedUrl": null,
			"input": {
				"pageTitle": "Research",
				"pageId": "research"
			},
			"output": null,
			"positionId": "inner-header-container"
		}, {
			"id": "rsch-recommended-reports",
			"hostedUrl": null,
			"input": {},
			"output": null,
			"positionId": "research-container"
		}]
	}, {
		"id": "events",
		"displayName": "Events",
		"order": "3",
		"route": "events",
		"template": "research-list",
		"subPage": "true",
		"parent": "mytoday",
		"components": [{
			"id": "rsch-inner-header",
			"hostedUrl": null,
			"input": {
				"pageTitle": "Events",
				"pageId": "events"
			},
			"output": null,
			"positionId": "inner-header-container"
		}, {
			"id": "rsch-recommended-events",
			"hostedUrl": null,
			"input": {},
			"output": null,
			"positionId": "research-container"
		}]
	}, {
		"id": "media-casts",
		"displayName": "Mediacasts",
		"order": "3",
		"route": "media-casts",
		"template": "research-list",
		"subPage": "true",
		"parent": "mytoday",
		"components": [{
			"id": "rsch-inner-header",
			"hostedUrl": null,
			"input": {
				"pageTitle": "Mediacasts",
				"pageId": "media-casts"
			},
			"output": null,
			"positionId": "inner-header-container"
		}, {
			"id": "rsch-podcasts-page",
			"hostedUrl": null,
			"input": {},
			"output": null,
			"positionId": "research-container"
		}]
	}, {
		"id": "issuer-deals",
		"displayName": "Deals",
		"order": "1",
		"route": "issuer-deals",
		"template": "issuer",
		"subPage": "false",
		"parent": "issuer-deals",
		"components": [{
			"id": "rsch-inner-header",
			"hostedUrl": null,
			"input": {
				"pageTitle": "Deals",
				"pageId": "issuer-deals"
			},
			"output": null,
			"positionId": "inner-header-container"
		}, {
			"id": "issuer-deals-list",
			"hostedUrl": null,
			"input": {},
			"output": null,
			"positionId": "insight-row-0-col-1"
		}, {
			"id": "issuer-deals",
			"hostedUrl": null,
			"input": {},
			"output": null,
			"positionId": "insight-row-12-col-1"
		}]
	}],
	"profile": {
		"userid": "userid",
		"email": "email",
		"name": null,
		"persona": "customer:\\\\issuer",
		"title": null,
		"source": "mercury",
		"userPod": "ExtIssuerCapMkt",
		"tokenScheme": "Bearer",
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJuaWhoaXJhbjAxIiwidXNlciI6IntcImlkXCI6XCJuaWhoaXJhbjAxXCIsXCJ0eXBlXCI6XCJFeHRlcm5hbFwiLFwiZW1haWxcIjpcIm5paGFsLmhpcmFuaUBiYW1sLmNvbVwiLFwic291cmNlXCI6XCJtZXJjdXJ5XCIsXCJwZXJzb25hXCI6XCJjdXN0b21lcjpcXFxcXFxcXGlzc3VlclwiLFwidXNlck1ldGFkYXRhXCI6e1wiY29udGFjdElkXCI6MCxcIkdDSVwiOlwiXCJ9LFwic3ViamVjdFwiOm51bGx9IiwibmJmIjoxNjE1MzE2MDA2LCJleHAiOjE2MTU5MjA4MDYsImlhdCI6MTYxNTMxNjAwNiwiaXNzIjoiaHR0cDovL3NvbWVpc3N1ZXIuY29tIiwiYXVkIjoiaHR0cDovL3NvbWVhdWRpZW5jZS5jb20ifQ.LAIr8JFW0KNoL7C_Ps2uufDEXeeG8TSfjw9Nqz6qS00",
		"isPilot": true,
		"isDIGAPIPilot": false,
		"isFirstTimeUser": false,
		"uiEntitlements": {
			"PnL": "false",
			"PodcastCurator": "true",
			"PodcastVideoCurator": "false",
			"actionItemsPN": "false",
			"audiocastPN": "true",
			"bankerAssist": "true",
			"capMktsCommentary": "true",
			"capMktsContacts": "true",
			"capMktsDeals": "true",
			"capMktsEvents": "true",
			"capMktsInflightDeals": "true",
			"capMktsSectorRsch": "true",
			"capMktsSubscribeRsch": "true",
			"capMktsTickerRsch": "true",
			"commentary": "true",
			"conference": "true",
			"dbPodcasts": "true",
			"deals": "false",
			"entitledToWizard": "false",
			"events": "true",
			"featuredResearch": "true",
			"gemsMeeting": "true",
			"glassPN": "false",
			"historicalReportUser": "false",
			"insightCoreAdmin": "false",
			"marketDashboard": "true",
			"marketcolor": "true",
			"meetings": "true",
			"morningCall": "false",
			"podVersion": "1.0.0",
			"pushNotification": "true",
			"rapidCommunications": "true",
			"rapidCommunicationsPN": "true",
			"recommendedResearch": "true",
			"research": "true",
			"researchAudioCast": "true",
			"researchConferences": "true",
			"researchForecast": "true",
			"researchTab": "true",
			"researchVideoCastPlaybackEntitlement": "true",
			"researchVideoCastRecording": "false",
			"roadshow": "true",
			"rschAudioRecording": "true",
			"salesAudioCasts": "true",
			"salesPlaylistEntitlement": "true",
			"salesVideoCastPlayback": "false",
			"salesVideoCastRecording": "false",
			"shouldUseNewBA": "true",
			"stories": "true",
			"supervisoryPN": "true",
			"supporting": "false",
			"survey": "false",
			"tomEvent": "false",
			"whatsNewAdmin": "false",
			"userId": "nihhiran01",
			"podName": "ExtIssuerCapMkt",
			"subRole": ""
		}
	},
	"status": {
		"status": "success",
		"environment": "PROD"
	}
}
 
