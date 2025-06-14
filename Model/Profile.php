<?php
/**
 * Cytracon
 *
 * This source file is subject to the Cytracon Software License, which is available at https://www.cytracon.com/license
 * Do not edit or add to this file if you wish to upgrade the to newer versions in the future.
 * If you wish to customize this module for your needs.
 * Please refer to https://www.cytracon.com for more information.
 *
 * @category  Cytracon
 * @package   Cytracon_PageBuilderPreview
 * @copyright Copyright (C) 2020 Cytracon (https://www.cytracon.com)
 */

namespace Cytracon\PageBuilderPreview\Model;

class Profile extends \Magento\Framework\Model\AbstractModel
{
    const CACHE_TAG = 'pagebuilderpreview_profile';

    /**#@-*/
    protected $_cacheTag = self::CACHE_TAG;

    /**
     * Prefix of model events names
     *
     * @var string
     */
    protected $_eventPrefix = 'pagebuilderpreview_profile';

    protected function _construct()
    {
        $this->_init(\Cytracon\PageBuilderPreview\Model\ResourceModel\Profile::class);
    }

    public function beforeSave()
    {
        if ($this->hasDataChanges()) {
            $this->setUpdateTime(null);
        }
        return parent::beforeSave();
    }
}