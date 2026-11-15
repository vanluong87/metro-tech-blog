---
title: "Passenger Announcement & Information Systems (PA/PIS) in Metro Stations: Lessons from Lima, Peru"
description: "A PA/PIS system combines public-address speakers with real-time passenger information displays, helping riders at Lima Metro stations get consistent updates on schedules, disruptions, and safety instructions."
lang: "en"
date: 2026-11-15
country: "Peru"
tags: ["PA/PIS", "passenger information", "M&E systems", "station operations"]
draft: false
heroImage: "/images/blog/he-thong-thong-bao-lima.svg"
heroImageAlt: "Diagram of a metro PA/PIS system: operations control center, public address speakers, and passenger information displays"
---

## What PA/PIS is and why metro stations need it

In a busy metro station, timely information is often what separates a smooth journey from a confused crowd. Public Address (PA) and Passenger Information System (PIS) are two components that always appear together in the mechanical and electrical (M&E) design of underground and elevated stations. PA delivers sound — routine announcements, emergency alerts, evacuation instructions — while PIS displays information visually on LED/LCD screens in concourses, on platforms, and inside trains: arrival countdowns, next station, line service status. At Lima Metro (Línea 1 and the lines under expansion), both systems are tightly integrated with the Operations Control Center (OCC) so that the information broadcast at every station stays consistent and up to date in real time.

## System architecture: from the control center to each station

- **Operations Control Center (OCC)**: where controllers monitor the whole line, trigger manual announcements during incidents, or activate pre-programmed automatic messages (for example, train-arrival announcements driven by signaling data).
- **Backbone transmission network**: fiber-optic cable or a dedicated data link connects the OCC to the PA/PIS controller at each station, keeping latency low and allowing fail-safe local operation if the link is briefly lost.
- **Station-level equipment**: zoned speakers (concourse, platform, corridors) so announcements can target the right area, plus PIS screens mounted at entrances, on platforms, and above train doors.
- **Integration with signaling and train monitoring**: real-time train-location data feeds into PIS to calculate and display accurate waiting times, rather than relying on a fixed timetable.

## Prioritizing announcement content

A key design principle is a strict priority hierarchy among announcement types. Emergency messages (fire, safety incidents, evacuation orders) always carry the highest priority, able to interrupt any routine broadcast in progress and play automatically across every speaker in the station or along the whole line. Routine operational announcements (train arrivals, direction changes, delays) sit at medium priority and are usually triggered automatically from signaling data. Lower-priority content (advertising, service information) is suspended the moment a higher-priority message needs to play. This layered priority scheme, combined with the controller's ability to override any message manually at any time, is a standard requirement in urban rail operational safety standards.

## Bilingual delivery and accessibility

In Lima, most PA announcements are delivered in Spanish, with some lines adding brief English messages at interchange stations that see significant international ridership. PIS screens typically support bilingual text or standardized pictograms to reduce dependence on any one language — particularly useful for visually impaired passengers with partial vision, or those unfamiliar with the local language. Good design also accounts for accessibility for hearing-impaired riders, for example by ensuring every important spoken announcement has an equivalent displayed on screen rather than relying on audio alone.

## Testing, operation, and maintenance

PA/PIS is integration-tested alongside the signaling and train control systems during commissioning, before a line enters commercial service, to confirm display latency and audio clarity meet standards even in noisy areas near the tracks or ventilation shafts. During operation, technical teams carry out routine checks of speakers, screens, and transmission links; equipment fault data (a disconnected screen, a failed speaker) is reported back to the monitoring center so issues can be resolved before they affect the quality of information passengers receive. For developing metro systems, investing properly in PA/PIS from the design stage — including a clear priority hierarchy, bilingual and accessibility features, and real-time data integration — contributes directly to passenger experience and safety every single day.
