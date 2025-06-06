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

namespace Cytracon\PageBuilderPreview\Model\ResourceModel\Profile;

class Collection extends \Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection
{
    /**
     * @var string
     */
    protected $_idFieldName = 'profile_id';

    protected function _construct()
    {
        $this->_init(\Cytracon\PageBuilderPreview\Model\Profile::class, \Cytracon\PageBuilderPreview\Model\ResourceModel\Profile::class);
    }
}