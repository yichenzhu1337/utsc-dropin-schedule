<?php

use Acme\Schedule\Interfaces\IScheduleRetriever;


class ActivitySessionsController extends \BaseController {

	// Dependencies
	protected $scheduleRetriever;

	/**
	 * Dependency Injections
	 * @param IScheduleRetriever $scheduleRetriever Schedule Retriever
	 */
	function __construct(IScheduleRetriever $scheduleRetriever)
	{
		$this->scheduleRetriever = $scheduleRetriever;
	}

	public function getActivitySessionsForThisWeek($activity_id)
	{
		return $this->scheduleRetriever->getActivitySessionsForThisWeek($activity_id);
	}

}